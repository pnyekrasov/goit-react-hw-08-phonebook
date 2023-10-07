import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Phonebook/operations';
import { ContactCard, Span } from './ContactItem.styled';
import { ModalWindow } from 'components/Modal/Modal';
import { useState } from 'react';
import { ContactFormEdit } from 'components/ContactFormEdit';

export const ContactItem = ({ id, name, number }) => {
  const [modalDelOpen, setModalDelOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <ContactCard>
      {name}:&nbsp;<Span>{number}</Span>
      <button type="button" onClick={() => setModalDelOpen(true)}>
        Delete
      </button>
      <ModalWindow isOpen={modalDelOpen} isClose={() => setModalDelOpen(false)}>
        <h2>Are you sure that you want to delete this contact?</h2>
        <button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
          style={{ backgroundColor: '#ec7733' }}
        >
          Delete
        </button>
      </ModalWindow>
      <button
        type="button"
        onClick={() => setModalEditOpen(true)}
        style={{ marginLeft: '8px' }}
      >
        Edit
      </button>
      <ModalWindow
        isOpen={modalEditOpen}
        isClose={() => setModalEditOpen(false)}
      >
        <ContactFormEdit id={id} />
      </ModalWindow>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
