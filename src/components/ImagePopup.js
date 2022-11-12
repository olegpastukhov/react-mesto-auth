import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup_type_image ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__img-content">
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__img" src={card.link} alt={card.name} />
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
