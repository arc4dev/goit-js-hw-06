'use strict';

const slider = document.getElementById('font-size-control');
const text = document.getElementById('text');

const setFontSize = () => {
  text.style.fontSize = `${slider.value}px`;
};

setFontSize();

slider.addEventListener('input', () => {
  setFontSize();
});
