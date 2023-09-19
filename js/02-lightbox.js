import { galleryItems } from "./gallery-items.js";

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
            <li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        alt="${item.description}"
                        title="${item.description}"
                    />
                </a>
            </li>
            `
    )
    .join("");
}

const list = document.querySelector(".gallery");
list.innerHTML = createMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "title",
  captionDelay: 250,
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    lightbox.open();
  }
});
