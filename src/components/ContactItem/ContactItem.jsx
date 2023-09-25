import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
import { ButtonDelete, ContactCard } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactCard>
      {name}:&nbsp;<span>{number}</span>
      <ButtonDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </ButtonDelete>
    </ContactCard>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
