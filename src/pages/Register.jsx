import { Helmet, HelmetProvider } from 'react-helmet-async';

import { RegisterForm } from 'components/RegisterForm';

const helmetContext = {};

export default function Register() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Register</title>{' '}
      </Helmet>
      <RegisterForm />
    </HelmetProvider>
  );
}
