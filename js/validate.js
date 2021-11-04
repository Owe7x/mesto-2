const  enableValidationParam = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (inputElement, formElement , param) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(param.inputErrorClass);
    errorElement.classList.add(param.errorClass);
    errorElement.textContent = inputElement.validationMessage;
    
};
  
const hideInputError = (inputElement, formElement , param) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(param.inputErrorClass);
    errorElement.classList.remove(param.errorClass);
    errorElement.textContent = '';
};
  
  const checkInputValidity = (inputElement , formElement , param) => {
    if (!inputElement.validity.valid) {
      showInputError(inputElement, formElement , param);
    } else {
      hideInputError(inputElement, formElement , param);
    }
  };
  
  const setEventListeners = (formElement , param) => {
    toggleButtonState(formElement, param);
    formElement.addEventListener('input', function (){
        toggleButtonState(formElement, param);
    });
    const inputList = Array.from(formElement.querySelectorAll(param.inputSelector));
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(inputElement, formElement, param);
        });
    });
    toggleButtonState(formElement, param);
  };
  
  const enableValidation = (param) => {
    const formList = Array.from(document.querySelectorAll(param.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement , param);
      });
  };
  

  
  const toggleButtonState = (formElement, param) => {
    const button = formElement.querySelector(param.submitButtonSelector);
    if (!formElement.checkValidity()) {
        button.classList.add(param.inactiveButtonClass);
        button.setAttribute('disabled', true);
    } else {
        button.classList.remove(param.inactiveButtonClass);
        button.removeAttribute('disabled');
    }
  }
enableValidation(enableValidationParam);