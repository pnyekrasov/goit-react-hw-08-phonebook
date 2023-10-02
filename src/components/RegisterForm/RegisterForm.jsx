import { Formik } from 'formik';

import { VscEyeClosed, VscEye } from 'react-icons/vsc';
import {
  Ikon,
  Label,
  LabelForm,
  StyledError,
  StyledField,
  StyledForm,
} from './RegisterForm.styled';
import * as Yup from 'yup';
import { useState } from 'react';
import { register } from 'redux/Auth/operations';
import { useDispatch } from 'react-redux';

const schema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(4, 'Name must be 4 characters long'),
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

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
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

        <button type="submit">Register</button>
      </StyledForm>
    </Formik>
  );
};
