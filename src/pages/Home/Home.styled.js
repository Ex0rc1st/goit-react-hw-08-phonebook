import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #2196f3;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 38px;
  text-align: center;
  color: #2196f3;
`;

export const StyledLink = styled(NavLink)`
  font-size: 38px;
  color: blue;
  text-decoration: none;

  :hover {
    color: orange;
    text-decoration: underline;
  }
`;
