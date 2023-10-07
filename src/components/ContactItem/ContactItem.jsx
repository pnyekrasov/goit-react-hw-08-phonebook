import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Phonebook/operations';
import { ContactCard, Span } from './ContactItem.styled';
import { ModalWindow } from 'components/Modal';
import { useState } from 'react';

export const ContactItem = ({ id, name, number }) => {
  const [modalDelOpen, setModalDelOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <ContactCard>
      {name}:&nbsp;<Span>{number}</Span>
      <button type="button" onClick={() => setModalDelOpen(true)}>
        Delete
      </button>
      <ModalWindow isOpen={modalDelOpen} isClose={() => setModalDelOpen(false)}>
        <h2>Are you sure that you want to delete this contact?</h2>
        <button type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </button>
      </ModalWindow>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
