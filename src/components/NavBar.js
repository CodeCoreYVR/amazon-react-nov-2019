import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>|<NavLink to="/products">Products</NavLink>
    </div>
  );
}

export default NavBar;
