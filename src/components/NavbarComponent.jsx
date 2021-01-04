import React from "react";
import { Nav, Navbar, NavItem, NavLink } from "reactstrap";

export const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="warning" dark expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink className="text-muted" href="/reservations">
              Reservations
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-muted" href="/users">
              Users
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
