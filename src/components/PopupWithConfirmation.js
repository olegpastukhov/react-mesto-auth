function PopupWithConfirmation({ isOpen, onClose, onLoading, card, onSubmit, }){
  const handleConfirmation = (event) => {
    event.preventDefault();
    onSubmit(card);
  };

  return (
    <div className={`popup popup_type_delete-card ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__content">
        <button type="button" className="popup__close" onClick={onClose} aria-label="Закрыть попап" />
        <h3 className="popup__title popup__title_type-delete">Вы уверены?</h3>
        <form name="delete-form" action="#" className="popup__form form" onSubmit={handleConfirmation} noValidate>
          <button type="submit" className="form__submit">
            {onLoading ? "Сохранение..." : "Да"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithConfirmation;
