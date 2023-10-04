import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm';

export default function Register() {
  return (
    <div>
      <Helmet>
        <title>Register</title>{' '}
      </Helmet>
      <RegisterForm />
    </div>
  );
}
