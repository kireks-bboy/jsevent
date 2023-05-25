// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
  console.log('все теги прогрузились')
})


// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
window.addEventListener('load', () => {
  console.log('страница загрузилась')
})



// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.



document.addEventListener('click', event => {
  const containSuperEl = event.target.classList.contains('super_element') ? 'присутствует' : 'отсутствует';
  const tagEl = event.target.tagName;
  console.log(`Класс "super_element" ${containSuperEl} в элементе "${tagEl.toLowerCase()}".`);
});



// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector('textarea')
textarea.addEventListener('mouseover', () => {
  console.log('вы навели на textarea')
})



// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', event => {
  if (event.target.tagName !== "BUTTON") {
    return;
}
console.log(event.target.textContent);

})




// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.
document.querySelectorAll('li:nth-child(2n)')
.forEach(el => el.style.backgroundColor = 'red');



