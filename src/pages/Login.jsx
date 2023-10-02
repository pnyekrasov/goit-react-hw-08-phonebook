import { LoginForm } from 'components/LoginForm/LoginForm';
import { Helmet } from 'react-helmet';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Log in</title>
      </Helmet>

      <LoginForm />
    </div>
  );
}
