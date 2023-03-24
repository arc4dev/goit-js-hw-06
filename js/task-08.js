'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //prevents from refreshing

  const { email, password } = e.target.elements;

  if (email.value === '' || password.value === '') {
    alert('All fields should be filled in!');
    return;
  }

  const acc = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(acc);

  e.target.reset(); //cleaning inputs
});
