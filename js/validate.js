const  enableValidationParam = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage , param) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(param.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(param.errorClass);
};
  
const hideInputError = (formElement, inputElement , param) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(param.inputErrorClass);
    errorElement.classList.remove(param.errorClass);
    errorElement.textContent = '';
};
  
  const checkInputValidity = (formElement, inputElement , param) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage , param);
    } else {
      hideInputError(formElement, inputElement , param);
    }
  };
  
  const setEventListeners = (formElement , param) => {
    const inputList = Array.from(formElement.querySelectorAll(param.inputSelector));
    const buttonElement = formElement.querySelector(param.submitButtonSelector);

    toggleButtonState(inputList, buttonElement , param);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement , param);

            toggleButtonState(inputList, buttonElement , param);
        });
    });
  };
  
  const enableValidation = (param) => {
    const formList = Array.from(document.querySelectorAll(param.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDeafault()
        })
        setEventListeners(formElement , param);
      });
  };
  
  const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }
  
  const toggleButtonState = (inputList , buttonElement , param) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(param.inactiveButtonClass)
    } else {
      buttonElement.classList.remove(param.inactiveButtonClass);
    }
  }
enableValidation(enableValidationParam);