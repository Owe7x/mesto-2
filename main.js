(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(t,r){var o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this._param=t,this._form=r,this._inputList=function(t){if(Array.isArray(t))return e(t)}(o=this._form.querySelectorAll(this._param.inputSelector))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var r,o;return r=n,(o=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListener()}},{key:"_setEventListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList)}))}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_toggleButtonState",value:function(e){var t=this._form.querySelector(this._param.submitButtonSelector);this._hasInvalidInput(e)?(t.disabled=!0,t.classList.add(this._param.inactiveButtonClass)):(t.disabled=!1,t.classList.remove(this._param.inactiveButtonClass))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_showInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.add(this._param.inputErrorClass),t.classList.add(this._param.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._param.inputErrorClass),t.classList.remove(this._param.errorClass),t.textContent=""}},{key:"clearInputs",value:function(e){Array.from(e.querySelectorAll(".popup-content__form")).forEach((function(e){e.value="",e.classList.remove("popup-content__form_invalid")}))}},{key:"resetValidation",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState(this._inputList)}}])&&t(r.prototype,o),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const i=function(){function e(t,n,r,i,a,u,c){var l=this,s=c.handleClickImg,f=c.deleteCard,p=c.userInfoId,h=c.addLikeCard,d=c.deleteLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_fillingCard",(function(){l._elementName.textContent=l._name,l._elementImg.src=l._link,l._elementImg.alt=l._name,l._elementLikes.textContent=l._countLike.length})),o(this,"_addListenersCard",(function(){l._elementLike.addEventListener("click",(function(){return l._toggleLike()})),l._addBtnDelete(),l._elementBtnDelete.addEventListener("click",(function(e){l.deleteCard(e)})),l._elementImg.addEventListener("click",(function(){l._handleClickImg({link:l._link,name:l._name})}))})),o(this,"_addBtnDelete",(function(){l._idUser()===l.ownerId&&l._elementBtnDelete.classList.add("elements__delete_active")})),o(this,"createCard",(function(){return l._fillingCard(),l._addListenersCard(),l._element})),this._formCard=document.querySelector(u).content,this._element=this._formCard.querySelector(".elements__element").cloneNode(!0),this._elementImg=this._element.querySelector(".elements__item"),this._elementName=this._element.querySelector(".elements__name"),this._elementLike=this._element.querySelector(".elements__bookmark"),this._elementDelete=this._element.querySelector(".elements__delete"),this._elementLikes=this._element.querySelector(".elements__likes"),this._elementBtnDelete=this._element.querySelector(".elements__delete"),this._elementSubmit=document.querySelector(".popup__submit_delete-card"),this._countLike=r,this._handleClickImg=s,this._name=t,this._link=n,this._idUser=p,this.ownerId=i._id,this.deleteCard=f,this.addLike=h,this.deleteLike=d,this.cardItemId=a}var t,n;return t=e,(n=[{key:"_toggleLike",value:function(){var e=this;this._elementLike.classList.contains("elements__bookmark_activated")?this.deleteLike(this.cardItemId).then((function(t){e.likes=t.likes,e._elementLike.classList.remove("elements__bookmark_activated"),e._elementLikes.textContent=t.likes.length})).catch((function(e){return console.log(e)})):this.addLike(this.cardItemId).then((function(t){e.likes=t.likes,console.log(e.likes),e._elementLike.classList.add("elements__bookmark_activated"),e._elementLikes.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}}])&&r(t.prototype,n),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._selectContainer=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._selectContainer.prepend(e)}},{key:"renderer",value:function(e){this._renderer(e)}}])&&a(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.selectorPopup=t,this.btnClose=this.selectorPopup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.selectorPopup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.selectorPopup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this.btnClose.addEventListener("click",this.close),this.selectorPopup.addEventListener("click",(function(t){t.target.classList.contains("popup_opened")&&e.close()}))}}])&&c(t.prototype,n),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function y(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}const _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).image=t.selectorPopup.querySelector(".popup__img"),t.imageTitle=t.selectorPopup.querySelector(".popup__img-title"),t}return t=a,(n=[{key:"open",value:function(e){p(m(a.prototype),"open",this).call(this),console.log(e),this.image.src=e.link,this.image.alt=e.name,this.imageTitle.textContent=e.name}}])&&f(t.prototype,n),a}(l);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}const L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n,r=t.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._submitFunction=r,n._inputs=Array.from(n.selectorPopup.querySelectorAll(".popup__input")),n._inputSrc=n.selectorPopup.querySelector("#place-img-input"),n.popupInput=Array.from(n.selectorPopup.querySelectorAll(".popup__input")),n._form=n.selectorPopup.querySelector(["form"]),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;k(C(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitFunction(e._getInputValues())}))}},{key:"close",value:function(){k(C(a.prototype),"close",this).call(this),this._form.reset()}},{key:"open",value:function(){k(C(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),a}(l);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const O=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._elemName=document.querySelector(t),this._elemAbout=document.querySelector(n),this._elemAvatar=document.querySelector(r),this._elemId=null}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._elemName.textContent,about:this._elemAbout.textContent,avatar:this._elemAvatar,id:this._elemId}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e._id,o=e.avatar;this._elemId=r,this._elemAvatar.src=o,this._elemName.textContent=t,this._elemAbout.textContent=n}},{key:"setAvatar",value:function(e){var t=e.avatar;this._elemAvatar.src=t}}])&&E(t.prototype,n),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=n,this.headers=r}var t,n;return t=e,(n=[{key:"_checkStatus",value:function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:{authorization:this.headers.authorization}}).then((function(t){return e._checkStatus(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{headers:{authorization:this.headers.authorization}}).then((function(t){return e._checkStatus(t)}))}},{key:"changeUserInfo",value:function(e){var t=this,n=e.name,r=e.about;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:{authorization:this.headers.authorization,"Content-Type":this.headers["Content-Type"]},body:JSON.stringify({name:n,about:r})}).then((function(e){return t._checkStatus(e)}))}},{key:"addNewCard",value:function(e){var t=this,n=e.name,r=e.link;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:{authorization:this.headers.authorization,"Content-Type":this.headers["Content-Type"]},body:JSON.stringify({name:n,link:r})}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this.headers.authorization}}).then((function(e){return t._checkStatus(e)}))}},{key:"addLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this.headers.authorization}}).then((function(e){return t._checkStatus(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this.headers.authorization}}).then((function(e){return t._checkStatus(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this.headers.authorization,"Content-Type":this.headers["Content-Type"]},body:JSON.stringify({avatar:e})}).then((function(e){return t._checkStatus(e)}))}}])&&I(t.prototype,n),e}(),j=function(e,t){t.querySelector(".popup__submit").textContent=e?"Сохранение...":"Сохранить"};function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function B(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).btnSubmit=e.querySelector(".popup__submit"),t}return t=a,(n=[{key:"performActions",value:function(e){this._handlerForm=e}},{key:"setEventListeners",value:function(){var e=this;T(U(a.prototype),"setEventListeners",this).call(this),this.btnSubmit.addEventListener("click",(function(t){return e._handlerForm(t)}))}}])&&A(t.prototype,n),a}(l),D=document.querySelector(".profile__edit-button"),V=document.querySelector(".popup_type_edit-profile"),N=document.querySelector(".profile__add-button"),H=document.querySelector(".popup_type_add-place"),F=document.querySelector(".popup_type_delete-card"),J=document.querySelector(".popup_type_edit-avatar"),M=document.querySelector(".profile__avatar-hover"),$=document.querySelector('[name="name"]'),G=document.querySelector('[name="about"]'),K=document.querySelector(".elements__list"),Q=document.querySelector(".popup_type_full-img"),W=document.querySelector(".popup__img"),X=document.querySelector(".popup__img-title"),Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=new O(".profile__title",".profile__subtitle",".profile__avatar"),te=new n(Y,V);te.enableValidation();var ne=new n(Y,H);ne.enableValidation();var re=new n(Y,J);re.enableValidation(),new l(F).setEventListeners();var oe=new u({renderer:function(e){var t=new i(e.name,e.link,e.likes,e.owner,e._id,"#element-template",{handleClickImg:function(e){W.src=e.link,W.alt=e.name,X.textContent=e.name,ie.open(e)},deleteCard:function(t){var n=t.target.parentElement;le.open(),le.performActions((function(t){t.preventDefault(),se.deleteCard(e._id).then((function(e){console.log(e),n.remove(),le.close()})).catch((function(e){return console.log(e)}))}))},userInfoId:function(){return ee.getUserInfo().id},addLikeCard:function(e){return se.addLikeCard(e).catch((function(e){return console.log(e)}))},deleteLikeCard:function(e){return se.deleteLikeCard(e).catch((function(e){return console.log(e)}))}}).createCard();oe.addItem(t)}},K),ie=new _(Q);ie.setEventListeners();var ae=new L(H,{submitHandler:function(e){j(!0,H),se.addNewCard({name:e.name,link:e.link}).then((function(e){console.log(e),oe.renderer(e),ae.close()})).catch((function(e){return console.log(e)})).finally((function(){return j(!1,H)}))}});ae.setEventListeners();var ue=new L(V,{submitHandler:function(e){j(!0,V),se.changeUserInfo({name:e.name,about:e.about}).then((function(e){ee.setUserInfo(e),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){return j(!1,V)}))}});ue.setEventListeners();var ce=new L(J,{submitHandler:function(e){j(!0,J),se.changeUserAvatar(e.link).then((function(e){ee.setAvatar({avatar:e.avatar}),ce.close()})).catch((function(e){return console.log(e)})).finally((function(){return j(!1,J)}))}});ce.setEventListeners();var le=new z(F);le.setEventListeners(),D.addEventListener("click",(function(){ue.open();var e=ee.getUserInfo();$.value=e.name,G.value=e.about,te.resetValidation()})),N.addEventListener("click",(function(){ae.open(),ne.resetValidation()})),M.addEventListener("click",(function(){ce.open(),re.resetValidation()}));var se=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-31",headers:{authorization:"000a9acd-0d17-4cba-9d5d-dea3574defd9","Content-Type":"application/json"}});Promise.all([se.getUserInfo(),se.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ee.setUserInfo(o),ee.setAvatar(o),i.forEach((function(e){return oe.renderer(e)}))})).catch((function(e){return console.log(e)}))})();