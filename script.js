// Initialize Variables
let closePopup = document.querySelector(".popupclose");
let overlay = document.querySelector(".overlay");
let profileEditPopup = document.querySelector(".profile-edit-popup");
let button = document.querySelector(".profile__edit-button");
// Close Popup Event
closePopup.onclick = function () {
  overlay.style.display = 'none';
  profileEditPopup.style.display = 'none';
};
// Show Overlay and Popup
button.onclick = function () {
  overlay.style.display = 'block';
  profileEditPopup.style.display = 'block';
}
