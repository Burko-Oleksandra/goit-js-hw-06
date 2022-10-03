// Напиши скрипт, який

// 1. під час втрати фокусу на інпуті
// (подія blur), перевіряє його вміст щодо правильної
// кількості введених символів.

// 2. Яка кількість смиволів повинна бути в інпуті,
// зазначається в його атрибуті data - length.
//
// 3. Якщо введена правильна кількість символів,
// то border інпуту стає зеленим, якщо неправильна
// кількість - червоним.

// 4. Для додавання стилів використовуй CSS-класи
// valid і invalid, які ми вже додали у вихідні файли завдання.

const formInput = document.querySelector('#validation-input');
// console.log(formInput);

const inputLength = formInput.dataset.length;
// console.log(inputLength);

formInput.addEventListener('blur', () => {
  //   console.log(formInput.value.length);
  if (formInput.value.length == inputLength) {
    formInput.classList.remove('invalid');
    formInput.classList.add('valid');
  } else {
    formInput.classList.remove('valid');
    formInput.classList.add('invalid');
  }
});
