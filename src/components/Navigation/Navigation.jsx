import { useAuth } from 'hooks/userAuth';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <StyledLink to="/contacts">Phonebook</StyledLink>
      ) : (
        <StyledLink to="/">Home</StyledLink>
      )}
    </nav>
  );
};
