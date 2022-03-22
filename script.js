// Initialize Variables
let closePopup = document.querySelector(".popup_close");
let popup = document.querySelector(".popup");
let profileName = document.querySelector(".profile__name");
let profileAbout = document.querySelector(".profile__about");
let formName = document.querySelector(".input__text_type_name");
let formAbout = document.querySelector(".input__text_type_about");

let saveForm = document.querySelector(".popup__save-button");
let openForm = document.querySelector(".profile__edit-button");

// Save Popup Event
saveForm.addEventListener('click', function () {
  profileName.textContent = formName.value;
  profileAbout.textContent = formAbout.value;
  popup.classList.remove('popup_opened');
});

// Close Popup Event
closePopup.addEventListener('click', function () {
  //popup.style.display = 'none';
  popup.classList.remove('popup_opened');
  //profileEditPopup.style.display = 'none';

});
// Show popup and Popup
openForm.addEventListener('click', function () {
  //popup.style.display = 'block';
  formName.value = profileName.textContent;
  formAbout.value = profileAbout.textContent;
  popup.classList.add('popup_opened');
  //profileEditPopup.style.display = 'block';

});

//addButton.addEventListener('click', addSong);





//// Находим форму в DOM
//let formElement = document.querySelector('.popup')
//// Находим поля формы в DOM
//let nameInput = // Воспользуйтесь инструментом .querySelector()
//  let jobInput = // Воспользуйтесь инструментом .querySelector()

//    // Обработчик «отправки» формы, хотя пока
//    // она никуда отправляться не будет
//    function formSubmitHandler(evt) {
//      evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
//      // Так мы можем определить свою логику отправки.
//      // О том, как это делать, расскажем позже.

//      // Получите значение полей jobInput и nameInput из свойства value

//      // Выберите элементы, куда должны быть вставлены значения полей

//      // Вставьте новые значения с помощью textContent
//    }

//// Прикрепляем обработчик к форме:
//// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler);
