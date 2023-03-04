'use strict';

const container = document.getElementById('counter');
const counter = document.getElementById('value');

let counterValue = 0;

const updateUI = function () {
  counter.textContent = counterValue;
};

updateUI();

container.addEventListener('click', (e) => {
  if (!e.target.dataset.action) return; //if target doesn't contain data attr

  const target = e.target.dataset.action;

  target === 'increment' ? counterValue++ : counterValue--;
  updateUI();
});
