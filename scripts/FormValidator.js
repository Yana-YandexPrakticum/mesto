export default class FormValidator{
    constructor(params, formElement){
        this._params = params;
        this._formElement = formElement;
    }

    _isValid(inputElement){
        return inputElement.validity.valid;
    };

    _isAllValid(inputList){
        return inputList.every(this._isValid);
    };

    _toggleButtonState(inputList, buttonElement){
        if(this._isAllValid(inputList)){
            buttonElement.classList.remove(this._params.inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        } else {
            buttonElement.classList.add(this._params.inactiveButtonClass);
            buttonElement.setAttribute('disabled', true);
        }
    };

    _setEventListeners(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._params.inputSelector));
        const buttonElement = this._formElement.querySelector(this._params.submitButtonSelector);
      
        this._toggleButtonState(inputList, buttonElement);
        inputList.forEach(inputElement => {
          inputElement.addEventListener('input', () => this._handleInput(inputElement, buttonElement, inputList));
        });
    };

    _handleInput(formInput, buttonElement, inputList){
        if (this._isValid(formInput)){
            this._hideInputError(formInput);
        } else {
            this._showInputError(formInput, formInput.validationMessage);
        }
        this._toggleButtonState(inputList, buttonElement);
    };

    _showInputError(formInput, errorMessage){
        const formError = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.add(this._params.inputErrorClass);
        formError.textContent = errorMessage;
    };
    
    _hideInputError(formInput){
        const formError = this._formElement.querySelector(`.${formInput.id}-error`);
        formInput.classList.remove(this._params.inputErrorClass);
        formError.textContent = '';
    };

    resetForm (){
        const inputList = Array.from(this._formElement.querySelectorAll(this._params.inputSelector));
        const buttonElement = this._formElement.querySelector(this._params.submitButtonSelector);
      
        inputList.forEach(inputElement => this._hideInputError(inputElement));
        this._toggleButtonState(inputList, buttonElement);
    };
    
    enableValidation(){
        this._setEventListeners();
    };
}