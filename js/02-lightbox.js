import { galleryItems } from "./gallery-items.js";

const list = document.querySelector(".gallery");

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

list.innerHTML = createMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "title",
  captionDelay: 250,
});
