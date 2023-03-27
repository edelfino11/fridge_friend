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
          <NavLink to={"/"} activestyle="true">
            Fridge Friend
          </NavLink>
          <NavLink to='/profile' activestyle="true">
            Your Profile
          </NavLink>
          <NavLink to='/fridge' activestyle="true">
            Your Fridge
          </NavLink>
          <NavLink to='/explore' activestyle="true">
            Explore Recipes
          </NavLink>
          <NavLink to='/grocery' activestyle="true">
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