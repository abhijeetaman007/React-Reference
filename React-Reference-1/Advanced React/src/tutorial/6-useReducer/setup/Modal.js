import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      //Here after 3000sec state isModelOpen is made false by use of dispatcher inside closeModal function
      closeModal();
    }, 3000);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
