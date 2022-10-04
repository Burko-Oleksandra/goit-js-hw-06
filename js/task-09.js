// Напиши скрипт, який змінює кольори фону
// елемента < body > через інлайн - стиль
// по кліку на button.change - color і
// виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
const colorBtn = document.querySelector('.change-color');
// console.log(colorBtn);

const bodyColor = document.querySelector('body');
// console.log(bodyColor);

const spanColor = document.querySelector('.color');
// console.log(spanColor);

colorBtn.addEventListener('click', () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = bodyColor.style.backgroundColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
