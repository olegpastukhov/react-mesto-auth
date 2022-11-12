import React from 'react';
function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          name={`${props.name}`}
          action="#"
          className="popup__form form"
          onSubmit={props.onSubmit}>
          <fieldset className="form__set">
            {props.children}
            <button type="submit" className="form__submit">{props.onLoading ? "Сохранение..." : "Сохранить"}</button>
          </fieldset>
        </form>
      </div>
    </div >
  );
}
export default PopupWithForm;
