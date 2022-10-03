// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
//
// 1. Створи змінну counterValue, в якій буде зберігатися поточне
// значення лічильника та ініціалізуй її значенням 0.

// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.

// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
let counter = document.querySelector('#value');

function decrementFunc() {
  counterValue -= 1;
  counter.textContent = counterValue;
  console.log(counterValue);
}

function incrementFunc() {
  counterValue += 1;
  counter.textContent = counterValue;
  console.log(counterValue);
}

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', decrementFunc);
incrementBtn.addEventListener('click', incrementFunc);

// console.log(decrementBtn);
// console.log(incrementBtn);

console.log(counter);
