import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: '1200',
    opacity: '0',
    transition: 'opacity 300ms',
  },

  'overlay:after': {
    opacity: '1',
    transform: 'translateY(0%)',
  },
  'overlay:before': {
    opacity: '0',
    ransform: 'translateY(-50%)',
  },

  '::before': {
    content: '""',
    display: 'block',
    height: '1px',
    flexGrow: '1',
  },
  '::after': {
    content: '""',
    display: 'block',
    height: '1px',
    flexGrow: '1',
  },

  content: {
    position: 'relative',
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    flexDirection: 'column',
    top: '50%',
    backgroundColor: '#fff',
    borderRadius: '30px',
    transition: 'transform 300ms',
    transform: 'translateY(-50%)',
  },
};

export const ModalWindow = ({ isOpen, isClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      closeTimeoutMS={300}
      style={customStyles}
    >
      {children}
      <button type="button" onClick={() => isClose()}>
        Cancel
      </button>
    </Modal>
  );
};
