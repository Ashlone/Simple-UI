import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { List, Logo, MenuContainer, ListItems } from "./Style";
import { Link } from "react-router-dom";

const Menu = (props) => (
  <MenuContainer>
    <Logo>Ashlone</Logo>
    <List>
      <ListItems>
        <Link to="/">Home</Link>
      </ListItems>
      <ListItems>
        <Link to="/shop">Shop</Link>
      </ListItems>
      <ListItems>
        <Link to="/profile">
          <FaUserAlt />
        </Link>
      </ListItems>
    </List>
  </MenuContainer>
);

export default Menu;
