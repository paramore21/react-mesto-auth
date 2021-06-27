import React from "react"
import PopupWithForm from "./PopupWithForm"
function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const urlRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar(urlRef.current.value)
    urlRef.current.value = ""
  } 

  return (
    <PopupWithForm       
      isOpen={isOpen}
      formName='update_avatar'
      title='Обновить аватар'
      buttonName='Сохранить'
      onClose={onClose}
      onSubmit={handleSubmit}> 
      <input type="url" ref={urlRef} className="avatar__edit avatar__edit_type_url popup__input" name="avatar" placeholder="Ссылка на картинку" required />
      <span className="popup__error" id="avatar__avatar__error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup