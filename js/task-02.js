'use strict';

const container = document.getElementById('ingredients');

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addIngredients = (arr) => {
  arr.forEach((item) => {
    const ingredient = document.createElement('li');
    ingredient.classList.add('item');
    ingredient.textContent = item;

    container.append(ingredient);
  });
};

addIngredients(ingredients);
