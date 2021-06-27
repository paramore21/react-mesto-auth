import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card({card, link, name, likes, onCardClick, onCardDelete, onCardLike}) {
  const currentUser = React.useContext(CurrentUserContext);

  const handleCardClick = () => {
    onCardClick({name, link, isOpen: true})
  }

  const handleCardDelete = () => {
    onCardDelete(card._id)
  }

  const handleCardLike = () => {
    onCardLike(card)
  }

  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked ? 'element__like-button element__like-button_active' : 'element__like-button'}`;
  
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'element__delete' : 'element__hidden'}`
  ); 

  return (
    <div className="element">
      <img className="element__image" src={link} alt={name} onClick={handleCardClick}/>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleCardDelete}></button>
      <h2 className="element__title">{card.name}</h2>
      <div className="element__likes">
        <button type="button" className={cardLikeButtonClassName} onClick={handleCardLike}></button>
        <p className="element__like-count">{likes.length}</p>
      </div>  
    </div>
  )
}

export default Card