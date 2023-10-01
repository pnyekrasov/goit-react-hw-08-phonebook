import { StyledLink } from 'components/Navigation/Navigation.styled';

export const AuthMenu = () => {
  return (
    <div>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </div>
  );
};
