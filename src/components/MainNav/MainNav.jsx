// import { useAuth } from 'hooks';
import { useAuth } from 'hooks/userAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu';

import { Wrap } from './MainNav.styled';

export const MainNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Wrap>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </Wrap>
  );
};
