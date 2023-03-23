import React from 'react';
import {
  Nav,
  
  NavLink,
  NavMenu,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
     
        <NavMenu>
          <NavLink to='/profile' activeStyle>
            Your Profile
          </NavLink>
          <NavLink to='/fridge' activeStyle>
            Your Fridge
          </NavLink>
          <NavLink to='/explore' activeStyle>
            Explore Recipes
          </NavLink>
          <NavLink to='/grocery' activeStyle>
            Your Grocery List
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;