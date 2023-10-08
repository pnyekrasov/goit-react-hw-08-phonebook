import { Formik } from 'formik';
import * as Yup from 'yup';
import { Label, StyledForm, StyledField, StyledError } from './Form.staled';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: Yup.string()
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({
  handleSubmit,
  name = '',
  number = '',
  Button,
  Color = '#fdfdfe',
}) => {
  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
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

        <button type="submit" style={{ backgroundColor: Color }}>
          {Button}
        </button>
      </StyledForm>
    </Formik>
  );
};
