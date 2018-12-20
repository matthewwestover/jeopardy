import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted>
    <Menu.Item as={NavLink} exact to='/'>
        Home
    </Menu.Item>
    <Menu.Item as={NavLink} exact to='/categories'>
        Categories
    </Menu.Item>
  </Menu>
);

export default Navbar;