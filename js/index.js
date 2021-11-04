const editButton = document.querySelector('.profile__edit-button')
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
const popupImgSrc = document.querySelector('.popup__img')
const popupImgTitle = document.querySelector('.popup__img-title')
const buttonClosePopupImage = document.querySelector('.popup__close_type_full-img')

const nameText = document.querySelector('.profile__title')
const jobText = document.querySelector('.profile__subtitle')
const elementsList = document.querySelector('.elements__list')


function createCard(item) {
    const elementTemplate = document.querySelector('#element-template').content;
    const element = elementTemplate.querySelector('.elements__element').cloneNode(true);
  
    element.querySelector('.elements__item').src = item.link;
    element.querySelector('.elements__name').textContent = item.name;
    element.querySelector('.elements__item').alt = item.name;
    element.querySelector('.elements__bookmark').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__bookmark_activated');
    });
    element.querySelector('.elements__delete').addEventListener('click', function () {
        element.remove()
    });  
    element.querySelector('.elements__item').addEventListener('click', ()=>{
        popupImgTitle.textContent = item.name;
        popupImgSrc.src = item.link;
        popupImgSrc.alt = item.name;
        openPopup(popupElementImage)
    })
    return element;
}
function render(item) {
    elementsList.append(item)
}

initialCards.forEach((item) => {
    render(createCard(item))
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
insertValuesFormProfile()

function handleFormProfileSubmit (evt) {
    evt.preventDefault(); 
    nameText.textContent = nameInput.value
    jobText.textContent = jobInput.value
    closePopup(popupElementProfile)
}

function addCard(item) {
    elementsList.prepend(createCard(item))
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


editButton.addEventListener('click', function(){
    openPopup(popupElementProfile)
    buttonEditSubmit.removeAttribute('disabled');
    buttonEditSubmit.classList.remove('popup__button_disabled');
})
buttonOpenPopupProfile.addEventListener('click', function(){
    openPopup(popupElementPlace)
    buttonAddSubmit.setAttribute('disabled', true);
    buttonAddSubmit.classList.add('popup__button_disabled')
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