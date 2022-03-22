// Initialize Variables
let closePopup = document.querySelector(".popupclose");
let popup = document.querySelector(".popup");
//let profileEditPopup = document.querySelector(".popup__container");
let button = document.querySelector(".profile__edit-button");
// Close Popup Event
closePopup.onclick = function () {
  //popup.style.display = 'none';
  popup.classList.remove('popup_opened');
  //profileEditPopup.style.display = 'none';

};
// Show popup and Popup
button.onclick = function () {
  //popup.style.display = 'block';
  popup.classList.add('popup_opened');
  //profileEditPopup.style.display = 'block';
}
