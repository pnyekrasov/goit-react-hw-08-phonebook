import React, { useState } from 'react';
import { StyledModal } from './Modal.styled';

export const ModalWindow = ({ isOpen, children }) => {
  const [, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = e => {
    setOpacity(0);
    setIsOpen(!isOpen);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  };

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        {children}
        <button onClick={toggleModal}>Close me</button>
      </StyledModal>
    </div>
  );
};
