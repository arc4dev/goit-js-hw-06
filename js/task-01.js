'use strict';

const items = document.querySelectorAll('.item');

const printMessage = (header, amount) => {
  console.log(`Category: ${header}`);
  console.log(`Elements: ${amount}`);
};

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector('h2').textContent;
  const elementsAmounut = item.querySelectorAll('li').length;
  printMessage(header, elementsAmounut);
});
