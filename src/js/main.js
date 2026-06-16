import { tarotDeck } from './data.js';

// Знаходимо всі потрібні елементи на сторінці
const drawBtn = document.getElementById('draw-btn');
const cardBackFace = document.querySelector('.card__face--back');
const cardName = document.getElementById('card-name');
const cardText = document.getElementById('card-text');

// Перевіряємо, чи кнопка взагалі існує на сторінці
if (drawBtn) {
  drawBtn.addEventListener('click', () => {
    // 1. Вибираємо випадковий індекс із масиву карт
    const randomIndex = Math.floor(Math.random() * tarotDeck.length);
    const randomCard = tarotDeck[randomIndex];

    // 2. Вставляємо картинку карти
    if (cardBackFace) {
      cardBackFace.innerHTML = `<img src="${randomCard.image}" alt="${randomCard.name}">`;
    }

    // 3. Виводимо текст під картою
    if (cardName) cardName.textContent = randomCard.name;
    if (cardText) cardText.textContent = randomCard.description;

    console.log(`Витягнуто карту: ${randomCard.name}`);
  });
} else {
  console.error('Кнопку з id="draw-btn" не знайдено в HTML!');
}
