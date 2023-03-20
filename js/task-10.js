'use strict';

const input = document.querySelector('input[type="number"]');
const container = document.getElementById('boxes');
const controls = document.getElementById('controls');

let width, height;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const init = () => {
  width = 20;
  height = 20;
};

init();

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    width += 10;
    height += 10;

    container.insertAdjacentHTML(
      'beforeend',
      `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()};" ></div>`
    );
  }
};

const deleteBoxes = () => {
  container.innerHTML = '';
  init();
};

//events
controls.addEventListener('click', (e) => {
  if (e.target.type !== 'button') return;

  const amount = input.value;

  if (e.target.hasAttribute('data-create')) createBoxes(amount);
  if (e.target.hasAttribute('data-destroy')) deleteBoxes();

  input.value = '';
});
