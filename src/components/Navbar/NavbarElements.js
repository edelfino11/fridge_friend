import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background: #FFFFFF;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
    
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
