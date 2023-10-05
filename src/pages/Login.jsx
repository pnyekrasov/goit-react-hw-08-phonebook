import { LoginForm } from 'components/LoginForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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

