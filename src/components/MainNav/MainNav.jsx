import { useAuth } from 'hooks';
import { Wrap } from './MainNav.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrap>
  );
};
