import { Formik } from 'formik';

import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import {
  Button,
  Ikon,
  Label,
  LabelForm,
  StyledError,
  StyledField,
  StyledForm,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { useState } from 'react';

const schema = Yup.object().shape({
  username: Yup.string()
    .required('Name is required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  email: Yup.string()
    .email('The value entered is not a mail')
    .required('Email is required')
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      'Fill out the field correctly, please'
    ),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be 6 characters long')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export const RegisterForm = () => {
  const [visible, setvisible] = useState(false);
  const handleShow = () => {
    setvisible(!visible);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <StyledForm>
        <Label>
          Username
          <StyledField name="username" />
          <StyledError name="username" component="div" />
        </Label>
        <Label>
          Email
          <StyledField name="email" type="email" placeholder="jane@acme.com" />
          <StyledError name="email" component="div" />
        </Label>

        <LabelForm>
          Password
          <StyledField name="password" type={visible ? 'text' : 'password'} />
          <Ikon onClick={handleShow}>
            {visible ? <VscEyeClosed /> : <VscEye />}
          </Ikon>
          <StyledError name="password" component="div" />
        </LabelForm>

        <Button type="submit">Register</Button>
      </StyledForm>
    </Formik>
  );
};
