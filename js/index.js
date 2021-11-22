import FormValidator from './FormValidator.js';
import Card from './Card.js';

const buttonEdit = document.querySelector('.profile__edit-button')
const popupCloseButtonEdit  = document.querySelector('.popup__close_type_edit-profile')
const popupElementProfile = document.querySelector('.popup_type_edit-profile')
const buttonEditSubmit = document.querySelector('.popup__submit_type_edit-profile')
const buttonAddSubmit = document.querySelector('.popup__submit_type_add-place')

const buttonOpenPopupProfile = document.querySelector('.profile__add-button')
const buttonClosePopupPlace = document.querySelector('.popup__close_type_add-place')
const popupElementPlace = document.querySelector('.popup_type_add-place')

const nameInput = document.querySelector('[name="name"]') 
const jobInput = document.querySelector('[name="job"]')

const placeTitle = document.querySelector('[name="place-title"]')
const placeImg = document.querySelector('[name="place-img"]')

const popupElementImage = document.querySelector('.popup_type_full-img')

const buttonClosePopupImage = document.querySelector('.popup__close_type_full-img')

const nameText = document.querySelector('.profile__title')
const jobText = document.querySelector('.profile__subtitle')
const elementsList = document.querySelector('.elements__list')

const formEdit = document.querySelector('.popup__form_type_edit-profile')
const formAdd = document.querySelector('.popup__form_type_add-place')

const errorsInput = Array.from(formEdit.querySelectorAll('.popup__error_visible'));
const inputsEdit = Array.from(formEdit.querySelectorAll('.popup__input_edit'));

const errorsAdd = Array.from(formAdd.querySelectorAll('.popup__error_visible'));
const inputsAdd = Array.from(formAdd.querySelectorAll('.popup__input_add'));


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

const  enableValidationParam = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};


const formEditProfileValidity = new FormValidator(enableValidationParam, popupElementProfile);
const formAddPlaceValidity = new FormValidator(enableValidationParam, popupElementPlace);

formEditProfileValidity.enableValidation();
formAddPlaceValidity.enableValidation();


initialCards.forEach(item => {
    addCard(item)
}) 

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', popupCloseKey);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', popupCloseKey);
}

function popupCloseKey (event){
    if(event.key === 'Escape'){
        const popup = document.querySelector('.popup_opened'); 
        closePopup(popup);
    }
}

function insertValuesFormProfile() {
    nameInput.value = nameText.textContent
    jobInput.value = jobText.textContent
    
}


function handleFormProfileSubmit (evt) {
    evt.preventDefault(); 
    nameText.textContent = nameInput.value
    jobText.textContent = jobInput.value
    closePopup(popupElementProfile)
}

function addCard(item) {
    const card = new Card(item.name, item.link, '#element-template');
    const cardElements = card.createElement(openPopup);
    elementsList.prepend(cardElements);
}


popupElementProfile.addEventListener('submit', handleFormProfileSubmit); 

popupElementPlace.addEventListener('submit', (e) => {
	e.preventDefault();
	const item = {
		name: placeTitle.value,
		link: placeImg.value
	}
	addCard(item);
    e.target.reset();
    closePopup(popupElementPlace)

}); 


buttonEdit.addEventListener('click', function(){
    openPopup(popupElementProfile)
    insertValuesFormProfile()
    errorsInput.forEach(function (error) {
        error.textContent = '';
    })
    inputsEdit.forEach(function (input) {
        input.classList.remove('popup__input_type_error');
    })

    buttonEditSubmit.removeAttribute('disabled');
    buttonEditSubmit.classList.remove('popup__button_disabled');
})


buttonOpenPopupProfile.addEventListener('click', function(){
    openPopup(popupElementPlace)
    buttonAddSubmit.setAttribute('disabled', true);
    buttonAddSubmit.classList.add('popup__button_disabled')
    placeTitle.value = ''
    placeImg.value = ''
    errorsAdd.forEach(function (error) {
        error.textContent = '';
    });

    inputsAdd.forEach(function (input) {
        input.classList.remove('popup__input_type_error');
    });
})
popupCloseButtonEdit.addEventListener('click', function(){
    closePopup(popupElementProfile)
})
buttonClosePopupPlace.addEventListener('click', function(){
    closePopup(popupElementPlace)
})
buttonClosePopupImage.addEventListener('click', function(){
    closePopup(popupElementImage)
})

function overlayClickHandler (e){
    if (e.target.classList.contains('popup_opened')){
        closePopup(e.target);
    }
}


popupElementProfile.addEventListener('click', overlayClickHandler);
popupElementPlace.addEventListener('click', overlayClickHandler);
popupElementImage.addEventListener('click', overlayClickHandler);