// import { useAuth } from 'hooks';
import { Wrap } from './MainNav.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu';
import { useAuth } from 'hooks/userAuth';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Wrap>
  );
};
