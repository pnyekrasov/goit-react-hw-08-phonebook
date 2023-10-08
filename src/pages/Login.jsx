
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { LoginForm } from 'components/LoginForm';

const helmetContext = {};

export default function Login() {
  return (
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
}

