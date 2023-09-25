import { Formik, Field, Form } from 'formik';

export const LoginForm = () => (
  <div>
    <h1>Sign Up</h1>
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
          <Field name="email" placeholder="jane@acme.com" type="email" />
        </label>

        <label>
          Password
          <Field name="password" type="password" />
        </label>

        <button type="submit">Log in</button>
      </Form>
    </Formik>
  </div>
);
