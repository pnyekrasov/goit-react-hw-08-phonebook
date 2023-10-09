import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { logIn } from 'redux/Auth/operations';
import { useIconToggle } from 'hooks/useIconToggle';

import { Iсon, LabelForm, StyledForm } from './FormAuth.styled';
import { Label, StyledError, StyledField } from './Form.staled';

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
  const [visible, inputType, ToggleIсon, onShow] = useIconToggle();
  const [, setVisibleIcon] = useState(false);

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
          <StyledField
            name="password"
            type={inputType}
            onFocus={() => setVisibleIcon(ps => !ps)}
            onBlur={() => setVisibleIcon(ps => !ps)}
          />
          {visible && <Iсon onClick={onShow}>{ToggleIсon}</Iсon>}
          <StyledError name="password" component="div" />
        </LabelForm>

        <button type="submit">Log in</button>
      </StyledForm>
    </Formik>
  );
};
