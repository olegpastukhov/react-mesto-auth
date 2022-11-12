import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDeleteClick }) {

  const currentUser = useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = card.owner._id === currentUser._id;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__likes ${isLiked ? "element__likes_active" : ""}`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card._id);
  }

  return (
    <div className="element">
      <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="element__bottom-block">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button type="button"
            className={cardLikeButtonClassName}
            aria-label="Поставить лайк"
            onClick={handleLikeClick}
          />
          <span className="element__likes-count">{card.likes.length}</span>
        </div>
        {isOwn && <button
          type="button"
          className="element__delete"
          onClick={handleDeleteClick}
          aria-label="Удалить карточку"
        />}
      </div>
    </div>
  );
};

export default Card;
