import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforebegin", createMarkup(galleryItems));
list.addEventListener("click", handleClick);

function createMarkup(arr) {
  return arr
    .map(
      (item) => `
  <li class"gallery__item">
   <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="large-image.jpg"
      alt="${item.description}"
    />
  </a>
  </li>
    `
    )
    .join("");
}
