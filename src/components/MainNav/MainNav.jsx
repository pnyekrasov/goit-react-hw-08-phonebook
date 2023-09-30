// import { useAuth } from 'hooks';
import { Wrap } from './MainNav.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthMenu';
import { useAuth } from 'hooks/userAuth';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrap>
      <Navigation />
      <UserMenu />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Wrap>
  );
};
