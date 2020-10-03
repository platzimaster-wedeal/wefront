import React from 'react'

// Stlyes
import '../../assets/styles/components/ModalNotification/ModalNotification.scss'

const ModalNotification = ({type, message}) => {

  return (
    <div className={`modal-notification ${type ? 'modal-notification--great' : 'modal-notification--wrong'}`}>
      <span> 
        {
          message || "Something happen"
        }
      </span>    
    </div>
  )
}

export default ModalNotification
