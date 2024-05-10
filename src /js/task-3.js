const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener('input', onInput);

function onInput() {
  const inputValue = input.value;
  if (inputValue.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputValue;
  }
}
