// Initialize Variables
const gallery = document.querySelector('.gallery');
const editProfile = document.querySelector("#popupEditProfile");
const profileClose = editProfile.querySelector(".popup__close");
const profileForm = editProfile.querySelector(".popup__form");
const profileName = editProfile.querySelector(".popup__text_type_name");
const profileAbout = editProfile.querySelector(".popup__text_type_about");
const name = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");

const openProfileForm = document.querySelector(".profile__edit-button");

function closeProfilePopup() {
  editProfile.classList.remove('popup_opened');
};

function openProfilePopup() {
  profileName.value = name.textContent;
  profileAbout.value = about.textContent;
  editProfile.classList.add('popup_opened');
};

function submitProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  name.textContent = profileName.value;
  about.textContent = profileAbout.value;
  closeProfilePopup();
};

profileClose.addEventListener('click', closeProfilePopup);

openProfileForm.addEventListener('click', openProfilePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', submitProfile);


// Initialize Variables
const popupAddCard = document.querySelector("#popupAddCard");
const cardClose = popupAddCard.querySelector(".popup__close");
const cardForm = popupAddCard.querySelector(".popup__form");
const cardName = popupAddCard.querySelector(".popup__text_type_name");
const cardLink = popupAddCard.querySelector(".popup__text_type_link");

const openCardForm = document.querySelector(".profile__add-button");

function closeCardPopup() {
  popupAddCard.classList.remove('popup_opened');
};

function openCardPopup() {
  popupAddCard.classList.add('popup_opened');
};

function addCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  gallery.prepend(createCard(cardName.value, cardLink.value));
  closeCardPopup();
};

cardClose.addEventListener('click', closeCardPopup);

openCardForm.addEventListener('click', openCardPopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardForm.addEventListener('submit', addCard);


function createCard(name, link) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.cloneNode(true);
  const image = newCard.querySelector('.card__picture');
  const title = newCard.querySelector('.card__title');
  image.src = link;
  image.alt = name;
  title.textContent = name;
  newCard.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
  newCard.querySelector('.card__trash-button').addEventListener('click', function (evt) {
    evt.target.parentElement.remove();
  });
  newCard.querySelector('.card__picture').addEventListener('click', openPicture);
  return newCard;
};



const imagePopup = document.querySelector("#popupImage");
const imageClose = imagePopup.querySelector(".popup__close");

function openPicture(evt) {
  const image = imagePopup.querySelector('.popup__image');
  image.src = evt.target.src;
  image.alt = evt.target.alt;
  const title = imagePopup.querySelector('.popup__image-title');
  title.textContent = evt.target.alt;
  imagePopup.classList.add('popup_opened');
};

function closeImagePopup() {
  imagePopup.classList.remove('popup_opened');
};


imageClose.addEventListener('click', closeImagePopup);

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

initialCards.forEach(card => gallery.appendChild(createCard(card.name, card.link)));

