// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і
// натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів
// очищається.

// Створи функцію createBoxes(amount), яка приймає один
// параметр - число.
// Функція створює стільки < div >, скільки вказано в
// amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і
// вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у
// форматі HEX.
// Використовуй готову функцію getRandomHexColor для
// отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст
// div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputForm = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const newCollection = document.querySelector('#boxes');
let array = [];

function createBoxes(amount) {
  array = [];
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement('div');
    div.classList.add('new-box');
    div.style.width = `${30 + 10 * (i - 1)}px`;
    div.style.height = `${30 + 10 * (i - 1)}px`;
    div.style.backgroundColor = getRandomHexColor();
    array.push(div);
  }
  console.log(array);
}

createBtn.addEventListener('click', () => {
  createBoxes(inputForm.value);
  newCollection.append(...array);
});

function destroyBoxes() {
  const newBoxes = document.querySelectorAll('.new-box');
  newBoxes.forEach(element => {
    element.remove();
  });
}

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
