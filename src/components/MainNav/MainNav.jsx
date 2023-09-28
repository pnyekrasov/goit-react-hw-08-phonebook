import { List, StyledLink } from './MainNav.styled';

export const MainNav = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Phonebook</StyledLink>
        </li>
        <li>
          <StyledLink to="/register">Register</StyledLink>
        </li>
        <li>
          <StyledLink to="/login">Login</StyledLink>
        </li>
      </List>
    </nav>
  );
};
