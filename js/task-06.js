'use strict';

const input = document.getElementById('validation-input');

input.addEventListener('blur', () => {
  //remove all the classes
  input.classList.remove('valid', 'invalid');

  if (input.value.length == Number.parseInt(input.dataset.length))
    input.classList.add('valid');
  else input.classList.add('invalid');
});
