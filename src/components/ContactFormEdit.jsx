import { useDispatch } from 'react-redux';
import { editContact } from 'redux/Phonebook/operations';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { Label, StyledForm, StyledField, StyledError } from './Form.staled';

const schema = Yup.object().shape({
  name: Yup.string().matches(
    /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  ),
  number: Yup.string().matches(
    /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
  ),
});

export const ContactFormEdit = ({ id, name, number, isClose }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name,
        number,
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(editContact({ ...values, id }));
        isClose();
        actions.resetForm();
      }}
    >
      <StyledForm>
        <h2>Are you sure you want to make changes to this contact?</h2>
        <Label>
          Name
          <StyledField name="name" />
          <StyledError name="name" component="div" />
        </Label>

        <Label>
          Phone Number
          <StyledField name="number" placeholder="XXX-XX-XX" />
          <StyledError name="number" component="div" />
        </Label>

        <button type="submit" style={{ backgroundColor: '#ec7733' }}>
          Edit
        </button>
      </StyledForm>
    </Formik>
  );
};
