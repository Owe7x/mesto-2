let openEditForm = document.querySelector('.profile__edit-button')
let closeEditForm = document.querySelector('.popup__close')
let formElement = document.querySelector('.popup')
let nameInput = document.querySelector('.popup_name');
let jobInput = document.querySelector('.popup_job')
let nameText = document.querySelector('.profile__title')
let jobText = document.querySelector('.profile__subtitle')

function openCloseForm(e) {
    e.preventDefault()
    if(formElement.classList.contains('popup_opened')) {
        formElement.classList.remove('popup_opened')
    } else {
        formElement.classList.add('popup_opened')
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
    formElement.classList.remove('popup_opened')
}

formElement.addEventListener('submit', formSubmitHandler); 
openEditForm.addEventListener('click', openCloseForm )
closeEditForm.addEventListener('click', openCloseForm )