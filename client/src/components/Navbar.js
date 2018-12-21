import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, Button, Icon } from "semantic-ui-react";

const Navbar = () => (
  <Menu inverted color="blue">
    <Menu.Item as={NavLink} exact to='/'>
      <Icon name="home" />
      Home
    </Menu.Item>
    <Menu.Item as={NavLink} exact to='/categories'>
      <Icon name="folder" />
      Categories
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item as={NavLink} exact to='/game'>
        <Button icon color='green'>
          <Icon name="game" />{'  '}
          Play Jeoparody!
        </Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default Navbar;