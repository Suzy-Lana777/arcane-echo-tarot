import { tarotDeck } from './data.js';

const cardBackFace = document.querySelector('.card__face--back');

if (cardBackFace) {
  const card = tarotDeck[0];

  // Створюємо картинку через об'єкт Image, щоб відстежити помилку
  const img = new Image();
  img.src = card.image;
  img.alt = card.name;

  img.onload = () => {
    cardBackFace.innerHTML = '';
    cardBackFace.appendChild(img);
    console.log('Зображення успішно завантажено');
  };

  img.onerror = () => {
    console.error('Помилка завантаження картинки за адресою:', card.image);
    // Якщо Вікіпедія блокує запит, спробуємо інше стабільне джерело
    cardBackFace.innerHTML = `<p style="padding: 20px;">Не вдалося завантажити фото. Спробуйте оновити сторінку.</p>`;
  };
} else {
  console.error('Не знайдено елемент .card__face--back');
}
