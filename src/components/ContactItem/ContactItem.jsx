import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/Phonebook/operations';
import { ContactCard, Span } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactCard>
      {name}:&nbsp;<Span>{number}</Span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
