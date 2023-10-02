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
} from './LoginForm.styled';
import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';

const schema = Yup.object().shape({
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

export const LoginForm = () => {
  const [visible, setvisible] = useState(false);
  const handleShow = () => {
    setvisible(!visible);
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
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

        <Button type="submit">Log in</Button>
      </StyledForm>
    </Formik>
  );
};
