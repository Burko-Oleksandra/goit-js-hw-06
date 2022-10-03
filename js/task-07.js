// Напиши скрипт, який реагує на зміну значення
// input#font - size - control (подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const formInput = document.querySelector('#font-size-control');
// console.log(formInput);

const spanText = document.querySelector('#text');
// console.log(spanText);

// formInput.value = 20;
// console.log(formInput.value);

// 1 варіант
formInput.addEventListener('input', () => {
  console.log(spanText.style.fontSize);
  spanText.style.fontSize = `${formInput.value}px`;
});

// 2 варіант
// formInput.addEventListener('blur', () => {
//   spanText.style.fontSize = `${formInput.value}px`;
// });

// 3 варіант
// formInput.addEventListener('mouseup', () => {
//   spanText.style.fontSize = `${formInput.value}px`;
// });
