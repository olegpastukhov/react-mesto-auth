import React, { useRef } from 'react';
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {

  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });

    e.target.reset();
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" className="form__input" required ref={avatarRef} />
      <span id="avatar-error" className="form__error-message"></span>
    </PopupWithForm>
  );
}


export default EditAvatarPopup;
