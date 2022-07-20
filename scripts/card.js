import {prepareImagePopup, openPopup, imagePopup} from './index.js'

export default class Card{

    //принимает в конструктор её данные и селектор её template-элемента;
    constructor(name, link, templateSelector){
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
    
    }

    //содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
    _getTemplate(){
        return document.querySelector(this._templateSelector).content.cloneNode(true);
    };

    _setEventListeners(newCard){
        newCard.querySelector('.card__like-button').addEventListener('click', this._toggleLikeButton);
        newCard.querySelector('.card__trash-button').addEventListener('click', this._handleCardDelete);
        newCard.querySelector('.card__picture').addEventListener('click', this._openPicture);
    };

    _fillData(newCard){
        const image = newCard.querySelector('.card__picture');
        const title = newCard.querySelector('.card__title');
        image.src = this._link;
        image.alt = this._name;
        title.textContent = this._name;
    };

    //содержит приватные методы для каждого обработчика;
    _toggleLikeButton(evt){
        evt.target.classList.toggle('card__like-button_active');
    };

    _handleCardDelete(evt){
        evt.target.closest('.card').remove();
    };
    
    _openPicture(evt){
        prepareImagePopup(evt.target);
        openPopup(imagePopup);
    };

    //содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
    generateCard(){
        const newCard = this._getTemplate();
        this._fillData(newCard);
        this._setEventListeners(newCard);
        return newCard;
    };
}
