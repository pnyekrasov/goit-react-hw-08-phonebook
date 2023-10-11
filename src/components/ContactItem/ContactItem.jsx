import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModalProvider } from 'styled-react-modal';

import { deleteContact, editContact } from 'redux/Phonebook/operations';
import { ModalWindow } from 'components/Modal/Modal';
import { ContactForm } from 'components/Forms/ContactForm';

import { ContactCard, Span } from './ContactItem.styled';
import { FadingBackground } from 'components/Modal/Modal.styled';

export const ContactItem = ({ id, name, number }) => {
  const [modalDelOpen, setModalDelOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const dispatch = useDispatch();

  const isClose = () => setModalEditOpen(false);

  const handleSubmit = (values, actions) => {
    dispatch(editContact({ ...values, id }));
    isClose();
    actions.resetForm();
  };

  return (
    <ContactCard>
      {name}:&nbsp;<Span>{number}</Span>
      <button type="button" onClick={() => setModalDelOpen(true)}>
        Delete
      </button>
      <ModalProvider backgroundComponent={FadingBackground}>
        <ModalWindow
          isOpen={modalDelOpen}
          isClose={() => setModalDelOpen(false)}
        >
          <h2>Are you sure that you want to delete this contact?</h2>
          <button
            type="button"
            onClick={() => dispatch(deleteContact(id))}
            style={{ backgroundColor: '#ec7733' }}
          >
            Delete
          </button>
        </ModalWindow>
      </ModalProvider>
      <button
        type="button"
        onClick={() => setModalEditOpen(true)}
        style={{ marginLeft: '8px' }}
      >
        Edit
      </button>
      <ModalProvider backgroundComponent={FadingBackground}>
        <ModalWindow
          isOpen={modalEditOpen}
          isClose={() => setModalEditOpen(false)}
        >
          <h2>Are you sure you want to make changes to this contact?</h2>
          <ContactForm
            handleSubmit={handleSubmit}
            Button="Edit"
            name={name}
            number={number}
            Color="#ec7733"
            Padding="50px"
          />
        </ModalWindow>
      </ModalProvider>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
