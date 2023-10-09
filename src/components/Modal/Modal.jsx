import Modal from 'react-modal';

import './Modal.css';

Modal.setAppElement('#root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
    >
      {children}
      <button type="button" onClick={() => isClose()}>
        Cancel
      </button>
    </Modal>
  );
};
