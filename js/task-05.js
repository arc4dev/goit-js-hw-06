'use strict';

const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

document.addEventListener('input', () => {
  const text = input.value;
  nameLabel.textContent = text === '' ? 'Anonymous' : text;
});
