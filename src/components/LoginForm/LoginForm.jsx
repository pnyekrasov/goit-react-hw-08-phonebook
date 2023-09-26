import { Formik, Field, Form } from 'formik';
import { useState } from 'react';
import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import { Ikon, PasswordForm } from './LoginForm.styled';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  password: Yup.string()
    .required('Phone number is required')
    .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const LoginForm = () => {
  const [visible, setvisible] = useState(false);
  const handleShow = () => {
    setvisible(!visible);
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => {}}
      >
        <Form>
          <label>
            Email
            <Field name="email" type="email" placeholder="jane@acme.com" />
          </label>

          <PasswordForm>
            Password
            <Field name="password" type={visible ? 'text' : 'password'} />
            <Ikon onClick={handleShow}>
              {visible ? <VscEyeClosed /> : <VscEye />}
            </Ikon>
          </PasswordForm>

          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};
