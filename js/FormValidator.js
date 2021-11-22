class FormValidator {
    constructor(param, form) {
        this._param = param;
        this._form = form;
        console.log(this._form)
    }
    enableValidation() {
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
          });
        this._setEventListener();
    }
    _setEventListener() {
        const inputList = Array.from(this._form.querySelectorAll(this._param.inputSelector));
        inputList.forEach((inputElement) => {
          inputElement.addEventListener("input", () => {
            this._checkInputValidity(inputElement);
            this._toggleButtonState(inputList);
          });
        });
    }
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
          this._showInputError(inputElement);
        } else {
          this._hideInputError(inputElement);
        }
      }
    
      _toggleButtonState(inputList) {
        const buttonElement = this._form.querySelector(this._param.submitButtonSelector);
        if (this._hasInvalidInput(inputList)) {
          buttonElement.disabled = true;
          buttonElement.classList.add(this._param.inactiveButtonClass);
        } else {
          buttonElement.disabled = false;
          buttonElement.classList.remove(this._param.inactiveButtonClass);
        }
      }
    
      _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
      }
    
      _showInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._param.inputErrorClass);
        errorElement.classList.add(this._param.errorClass);
        errorElement.textContent = inputElement.validationMessage;
      }
    
      _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._param.inputErrorClass);
        console.log(errorElement)
        errorElement.classList.remove(this._param.errorClass);
        errorElement.textContent = "";
      }
}

export default FormValidator;