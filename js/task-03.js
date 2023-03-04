'use strict';

const container = document.querySelector('.gallery');

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach((img) => {
  const html = `<div class="card"> <img src="${img.url}" alt="${img.alt}"> </div>`;
  container.insertAdjacentHTML('beforeend', html);
});

//animation nie obowiazkowe dla funu
const cards = document.querySelectorAll('.card');

const handleHover = function (e) {
  const target = e.target.closest('.card');
  if (!target) return; //if target

  cards.forEach((card) => {
    if (card !== target) card.style.opacity = this;
  });
};

container.addEventListener('mouseover', handleHover.bind(0.7));
container.addEventListener('mouseout', handleHover.bind(1));
