// Elements of main page
const gallery = document.querySelector('.gallery');
const buttonOpenProfileForm = document.querySelector(".profile__edit-button");
const buttonNewCardForm = document.querySelector(".profile__add-button");
const name = document.querySelector(".profile__name");
const about = document.querySelector(".profile__about");

//profilePopup Popup
const profilePopup = document.querySelector(".popup_type_edit-profile");
const profileClose = profilePopup.querySelector(".popup__close");
const profileForm = profilePopup.querySelector(".popup__form");
const profileName = profilePopup.querySelector(".popup__text_type_name");
const profileAbout = profilePopup.querySelector(".popup__text_type_about");
const profileContainer = profilePopup.querySelector(".popup__container");
//AddCard Poopup
const popupAddCard = document.querySelector(".popup_type_add-card");
const cardClose = popupAddCard.querySelector(".popup__close");
const cardForm = popupAddCard.querySelector(".popup__form");
const cardName = popupAddCard.querySelector(".popup__text_type_name");
const cardLink = popupAddCard.querySelector(".popup__text_type_link");
const cardContainer = popupAddCard.querySelector(".popup__container");
//Image Popup
const imagePopup = document.querySelector(".popup_type_image");
const imageClose = imagePopup.querySelector(".popup__close");
const image = imagePopup.querySelector('.popup__image');
const title = imagePopup.querySelector('.popup__image-title');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener("keydown", closePopupOnEsc);
};

function closePopupOnEsc(evt) {
  console.log(evt);
  if (evt.key === "Escape") {
    const popup = evt.target.closest('.popup');
    closePopup(popup);
  }
};

function openPopup(popup) {
  popup.addEventListener("keydown", closePopupOnEsc);
  popup.classList.add('popup_opened');
};

function closeProfilePopup() {
  closePopup(profilePopup);
};

function syncProfile(load) {
  if (load) {
    profileName.value = name.textContent;
    profileAbout.value = about.textContent;
  } else {
    name.textContent = profileName.value;
    about.textContent = profileAbout.value;
  }
};

function openProfilePopup() {
  syncProfile(true);
  resetForm(profilePopup, params);
  openPopup(profilePopup);
};

function submitProfile(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  syncProfile(false);
  closeProfilePopup();
};

function closeCardPopup() {
  closePopup(popupAddCard);
};

function cleanCardPopup() {
  cardName.value = "";
  cardLink.value = "";
  const buttonElement = popupAddCard.querySelector('.popup__save-button');
  buttonElement.setAttribute('disabled', true);
};

function openCardPopup() {
  cleanCardPopup();
  //resetForm(popupAddCard);
  openPopup(popupAddCard);
};

function addCard(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  gallery.prepend(createCard(cardName.value, cardLink.value));
  closeCardPopup();
};

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
    evt.target.closest('.card').remove();
  });
  image.addEventListener('click', openPicture);
  return newCard;
};

function prepareImagePopup(cardImage) {
  image.src = cardImage.src;
  image.alt = cardImage.alt;
  title.textContent = cardImage.alt;
}

function openPicture(evt) {
  prepareImagePopup(evt.target);
  openPopup(imagePopup);
};

function closeImagePopup() {
  closePopup(imagePopup);
};

function stopPropagation(evt) {
  evt.stopPropagation();
};

profileClose.addEventListener('click', closeProfilePopup);
profilePopup.addEventListener('click', closeProfilePopup);
buttonOpenProfileForm.addEventListener('click', openProfilePopup);
profileContainer.addEventListener('click', stopPropagation);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
profileForm.addEventListener('submit', submitProfile);


cardClose.addEventListener('click', closeCardPopup);
popupAddCard.addEventListener('click', closeCardPopup);
buttonNewCardForm.addEventListener('click', openCardPopup);
cardContainer.addEventListener('click', stopPropagation);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
cardForm.addEventListener('submit', addCard);

imageClose.addEventListener('click', closeImagePopup);
imagePopup.addEventListener('click', closeImagePopup);

initialCards.forEach(card => gallery.appendChild(createCard(card.name, card.link)));


