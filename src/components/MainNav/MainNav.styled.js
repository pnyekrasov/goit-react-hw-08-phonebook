import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 12px 24px;
  list-style: none;
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: red;
  }
`;
