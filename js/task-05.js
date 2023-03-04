'use strict';

const input = document.getElementById('name-input');
const nameLabel = document.getElementById('name-output');

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;

  const text = input.value;
  nameLabel.textContent = text === '' ? 'Anonymous' : text;
});
