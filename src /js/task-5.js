function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

changeBtn.addEventListener('click', onBtn);

function onBtn() {
  const result = (document.body.style.backgroundColor = getRandomHexColor());
  spanColor.textContent = result;
}
