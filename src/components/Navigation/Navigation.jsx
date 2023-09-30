// import { useAuth } from 'hooks';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Phonebook</StyledLink>
      {/* {isLoggedIn && <StyledLink to="/contacts">Phonebook</StyledLink>} */}
    </nav>
  );
};
