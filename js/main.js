let openEditForm = document.querySelector('.profile__edit-button')
let closeEditForm = document.querySelector('.popup__close')
let popupElement = document.querySelector('.popup')

let openAddForm = document.querySelector('.profile__add-button')
let closeAddForm = document.querySelector('.form__close')
let formElement = document.querySelector('.form')

let nameInput = document.querySelector('[name="name"]')
let jobInput = document.querySelector('[name="job"]')

let placeTitle = document.querySelector('[name="place-title"]')
let placeImg = document.querySelector('[name="place-img"]')

let popupImg = document.querySelector('.popup-img')
let popupImgSrc = document.querySelector('.popup__img')
let popupImgTitle = document.querySelector('.popup__img-title')
let popupImgClose = document.querySelector('.popup__close_img')

let nameText = document.querySelector('.profile__title')
let jobText = document.querySelector('.profile__subtitle')
let elementsList = document.querySelector('.elements__list')
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
function Card(initialCardsName , initialCardsImg) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
  
    elementElement.querySelector('.elements__item').src = initialCardsImg;
    elementElement.querySelector('.elements__name').textContent = initialCardsName;
    elementElement.querySelector('.elements__item').alt = initialCardsName;
    elementElement.querySelector('.elements__bookmark').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__bookmark_activated');
    });
    elementElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
        elementElement.remove()
    });  
    elementElement.querySelector('.elements__item').addEventListener('click', (evt)=>{
        popupImgTitle.textContent = initialCardsName;
        popupImgSrc.src = initialCardsImg;
        popupImgSrc.alt = initialCardsName;
        toggleForm(popupImg);
    })
    elementsList.append(elementElement)
}
for (let i = 0; i < initialCards.length; i++) { 
    Card(initialCards[i].name, initialCards[i].link)
}


function toggleForm(form) {
    event.preventDefault();
    if(form.classList.contains('popup_opened')) {
        form.classList.remove('popup_opened')
    } else {
        form.classList.add('popup_opened')
    }
    inputForm()
}

function inputForm() {
    nameInput.value = nameText.innerHTML
    jobInput.value = jobText.innerHTML
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameText.textContent = nameInput.value
    jobText.textContent = jobInput.value
    popupElement.classList.remove('popup_opened')
}

function formAddItem (evt) {
    evt.preventDefault(); 

    const elementTemplate = document.querySelector('#element-template').content;
    const elementElement = elementTemplate.querySelector('.elements__element').cloneNode(true);
  
    elementElement.querySelector('.elements__item').src = placeImg.value;
    elementElement.querySelector('.elements__name').textContent = placeTitle.value;
    elementElement.querySelector('.elements__item').alt = placeTitle.value;
    elementElement.querySelector('.elements__bookmark').addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__bookmark_activated');
    }); 
    elementElement.querySelector('.elements__delete').addEventListener('click', function (evt) {
        elementElement.remove()
    });
    elementElement.querySelector('.elements__item').addEventListener('click', (evt)=>{
        popupImgTitle.textContent = placeTitle.value;
        popupImgSrc.src = placeImg.value;
        popupImgSrc.alt = placeTitle.value;
        toggleForm(popupImg);
    })
    elementsList.prepend(elementElement)

    formElement.classList.remove('popup_opened')
}

popupElement.addEventListener('submit', formSubmitHandler); 

formElement.addEventListener('submit', formAddItem); 

openEditForm.addEventListener('click', function(){
    toggleForm(popupElement)
})
openAddForm.addEventListener('click', function(){
    toggleForm(formElement)
})
closeEditForm.addEventListener('click', function(){
    toggleForm(popupElement)
})
closeAddForm.addEventListener('click', function(){
    toggleForm(formElement)
})
popupImgClose.addEventListener('click', function(){
    toggleForm(popupImg)
})


