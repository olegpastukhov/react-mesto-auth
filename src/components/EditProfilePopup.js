import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      username: name,
      job: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-form"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoading={onLoading}
    >
      <input type="text" name="username" id="username" placeholder="Имя" minLength="2" maxLength="40"
        className="form__input" required onChange={handleNameChange} value={name || ""} />
      <span id="username-error" className="form__error-message"></span>
      <input type="text" name="job" id="job" placeholder="Вид деятельности" minLength="2" maxLength="200"
        className="form__input" required onChange={handleDescriptionChange} value={description || ""} />
      <span id="job-error" className="form__error-message"></span>
    </PopupWithForm>
  );
}


export default EditProfilePopup;
