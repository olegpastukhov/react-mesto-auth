import React from 'react';
import PopupWithForm from "./PopupWithForm";

function PopupWithConfirmation({ isOpen, onClose, onLoading, card, onSubmit, }){
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(card);
  };

  return (
    <PopupWithForm
      name="delete-card"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
    </PopupWithForm>
  );
};

export default PopupWithConfirmation;
