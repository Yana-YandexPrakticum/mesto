// Initialize Variables
let formElement = document.querySelector(".popup__form");
let closeButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let formName = document.querySelector(".popup__text_type_name");
let formAbout = document.querySelector(".popup__text_type_about");
let openForm = document.querySelector(".profile__edit-button");


function closePopup() {
  popup.classList.remove('popup_opened');
};

function openPopup() {
  formName.value = profileName.textContent;
  formAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = formName.value;
  profileAbout.textContent = formAbout.value;
  closePopup();
}


closeButton.addEventListener('click', closePopup);

openForm.addEventListener('click', openPopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

function createCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.cloneNode(true);
  const image = newCard.querySelector('.card__picture');
  const title = newCard.querySelector('.card__title');
  image.src = link;
  image.alt = name;
  title.textContent = name;
  document.querySelector('.gallery').appendChild(newCard);
};

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(card => createCard(card.name, card.link));

