import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">Example</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/users">
                <NavLink>User</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/posts">
                <NavLink>Posts</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/members">
                <NavLink>Members</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/profile">
                <NavLink>Profile</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
