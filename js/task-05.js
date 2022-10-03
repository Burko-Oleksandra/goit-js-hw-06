// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній, у спані
// повинен відображатися рядок "Anonymous".

const inputText = document.querySelector('#name-input');
console.log(inputText.textContent);

const outputText = document.querySelector('#name-output');
console.log(outputText);

inputText.addEventListener('input', event => {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value === '') {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = event.currentTarget.value;
  }
});
