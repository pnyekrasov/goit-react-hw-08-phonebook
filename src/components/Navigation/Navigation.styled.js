import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  font-weight: 700;
  color: #595757;

  &.active {
    color: #ff0000;
  }
`;
