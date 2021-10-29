const openEditForm = document.querySelector('.profile__edit-button')
const closeEditForm = document.querySelector('.popup__close_type_edit-profile')
const popupElementProfile = document.querySelector('.popup_type_edit-profile')

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
const buttonClosePopupImage = document.querySelector('.popup__close_type__full-img')

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
        togglePopup(popupElementImage);
    })
    return element;
}
function render(item) {
    elementsList.append(item)
}

initialCards.forEach((item) => {
    render(createCard(item))
}) 

function togglePopup(form) {
    event.preventDefault();
    form.classList.toggle('popup_opened')
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
    togglePopup(popupElementProfile)
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
	togglePopup(popupElementPlace)

}); 


openEditForm.addEventListener('click', function(){
    togglePopup(popupElementProfile)
})
buttonOpenPopupProfile.addEventListener('click', function(){
    togglePopup(popupElementPlace)
})
closeEditForm.addEventListener('click', function(){
    togglePopup(popupElementProfile)
})
buttonClosePopupPlace.addEventListener('click', function(){
    togglePopup(popupElementPlace)
})
buttonClosePopupImage.addEventListener('click', function(){
    togglePopup(popupElementImage)
})
