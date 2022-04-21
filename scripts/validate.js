//validation




const showInputError = (formElement, formInput, errorMessage) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add('popup__text_type_error');
  formError.textContent = errorMessage;
  //formError.classList.add('form__input-error_active');
};

const hideInputError = (formElement, formInput) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('popup__text_type_error');
  //formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

const isValid = (formElement, formInput) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
};



const setEventListener = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  toggleButtonState(inputList, buttonElement);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const resetForm = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
  const buttonElement = formElement.querySelector('.popup__save-button');

  inputList.forEach(inputElement => {
    isValid(formElement, inputElement);
  });
  toggleButtonState(inputList, buttonElement);
};


const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_inactive');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('popup__save-button_inactive');
    buttonElement.removeAttribute('disabled');
  }
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  //formList.forEach(formElement => {
  //  formElement.addEventListener('submit', evt => {
  //    evt.preventDefault();
  //  });
  //  setEventListener(formElement);
  //});
  formList.forEach(setEventListener);
};


enableValidation();



/*




*/
