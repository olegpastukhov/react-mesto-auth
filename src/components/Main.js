import React, { useContext } from 'react';
import preloaderPath from '../images/preloader.gif';
import Card from './Card';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDeleteClick }) {

  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar } = currentUser;

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__card">
          <img className="profile__avatar" src={avatar ? avatar : preloaderPath} alt="Аватар пользователя" />
          <button className="profile__avatar-button" onClick={onEditAvatar} aria-label="Обновить аватар" />
          <div className="profile__info">
            <h1 className="profile__title">{name}</h1>
            <button type="button" className="profile__edit-button" onClick={onEditProfile} aria-label="Редактировать профиль" />
            <p className="profile__description">{about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" onClick={onAddPlace} aria-label="Добавить карточку" />
      </section>
      <section aria-label="Карточки" className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDeleteClick={onCardDeleteClick}
            />
          );
        })}
      </section>
    </main>
  )
}


export default Main;
