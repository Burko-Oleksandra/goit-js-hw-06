// Напиши скрипт управління формою логіна.

// 1. Обробка відправлення форми form.login-form повинна
// відбуватися відповідно до події submit.

// 2. Під час відправлення форми сторінка не повинна
// перезавантажуватися.
//
// 3.Якщо у формі є незаповнені поля, виводь alert з
// попередженням про те, що всі поля повинні бути заповнені.
//
// 4. Якщо користувач заповнив усі поля і відправив форму,
// збери значення полів в об'єкт, де ім'я поля буде ім'ям
// властивості, а значення поля - значенням властивості.

// 5. Для доступу до елементів форми використовуй
// властивість elements.

// 6. Виведи об'єкт із введеними даними в консоль
// і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
// console.log(form);
const objForm = {};

form.addEventListener('submit', handleBtn);

function handleBtn(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заповніть, будь-ласка, всі поля');
  } else {
    objForm.email = email.value;
    objForm.password = password.value;
  }
  console.log(objForm);
  event.currentTarget.reset();
}
