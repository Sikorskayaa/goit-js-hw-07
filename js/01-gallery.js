import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
    <li class="gallery__item js-gallery-item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
          data-source="${item.original}"
          alt="${item.description}"
        />
      </a>
    </li>
      `
    )
    .join("");
}

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const currentGallery = event.target.closest(".js-gallery-item");
  if (!currentGallery) return;

  const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src="${event.target.dataset.source}"
      alt="${event.target.alt}"
    />
  `);
  instance.show();
}
