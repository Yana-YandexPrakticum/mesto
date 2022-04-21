const showInputError = (formElement, formInput, errorMessage, params) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.add(params.inputErrorClass);
  formError.textContent = errorMessage;
  //formError.classList.add('form__input-error_active');
};

const hideInputError = (formElement, formInput, params) => {
  const formError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove(params.inputErrorClass);
  //formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

const isValid = (formElement, formInput, params) => {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage, params);
  } else {
    hideInputError(formElement, formInput, params);
  }
};



const setEventListener = (formElement, params) => {
  const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
  const buttonElement = formElement.querySelector(params.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, params);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, params);
      toggleButtonState(inputList, buttonElement, params);
    });
  });
};

const resetForm = (formElement, params) => {
  const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
  const buttonElement = formElement.querySelector(params.submitButtonSelector);

  inputList.forEach(inputElement => {
    isValid(formElement, inputElement, params);
  });
  toggleButtonState(inputList, buttonElement, params);
};


const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement, params) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(params.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(params.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const enableValidation = (params) => {
  const formList = Array.from(document.querySelectorAll(params.formSelector));
  //formList.forEach(formElement => {
  //  formElement.addEventListener('submit', evt => {
  //    evt.preventDefault();
  //  });
  //  setEventListener(formElement);
  //});
  formList.forEach(formElement => setEventListener(formElement, params));
};

const params = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(params);
