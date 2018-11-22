import { Navbar, NavbarBrand } from "reactstrap";
import React from 'react';

const Header = props => {
  return (
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        number of dishes: {props.dishesnumber}
      </div>
    </Navbar>
  );
};

export default Header;
