class Card {
    constructor(name, link, template) {
        this._name = name;
        this._link = link;
        this._template = template;

    }
    _getTemplate() {
        const Element = document
            .querySelector(this._template)
            .content
            .cloneNode(true)
        return Element;
    }
    createElement(openPopup) {
        this._element = this._getTemplate();
        this._elementImg = this._element.querySelector('.elements__item');
        this._elementName = this._element.querySelector('.elements__name');
        this._elementLike = this._element.querySelector('.elements__bookmark');
        this._elementDelete = this._element.querySelector('.elements__delete');
        this._elementName.textContent = this._name;
        this._elementImg.src = this._link;
        this._elementImg.alt = this._name;
        this._setEventListener(openPopup);
        return this._element;
    }
    _setEventListener(openPopup) {
        this._elementImg.addEventListener('click', () => {
            const popupElementImage = document.querySelector('.popup_type_full-img');
            const popupImgSrc = document.querySelector('.popup__img');
            const popupImgTitle = document.querySelector('.popup__img-title');
            popupImgSrc.src = this._link;
            popupImgSrc.alt = this._name;
            popupImgTitle.textContent = this._name;
            openPopup(popupElementImage);
        });

        this._elementLike.addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__bookmark_activated');
        })

        this._elementDelete.addEventListener('click', function (evt) {
            evt.target.parentNode.remove()
        })

    }
}
export default Card;