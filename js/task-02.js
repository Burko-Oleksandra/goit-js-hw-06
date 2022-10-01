// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1. Створить окремий елемент <li>. Обов'язково використовуй
// метод document.createElement().

// 2. Додасть назву інгредієнта як його текстовий вміст.
//
// 3. Додасть елементу клас item.

// 4. Після чого, вставить усі <li> за одну операцію
// у список ul#ingredients.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientEl = [];

for (let ingredient of ingredients) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent = ingredient;
  ingredientEl.push(item);
}

const listEl = document.querySelector('#ingredients');
listEl.append(...ingredientEl);
// console.log(ingredientEl[2]);
console.log(listEl);
