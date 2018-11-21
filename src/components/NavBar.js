import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  const {currentUser} = props;
  const handleSignOutClick = event => {
    event.preventDefault();
     if (typeof props.onSignOut === "function") {
      props.onSignOut();
    }
  };
  return (
    <div className="NavBar">
      <NavLink to="/">Home</NavLink>|<NavLink to="/products">Products</NavLink>|
      
      {currentUser ? (
        <span>
          <>
            <NavLink to="/products/new">New Product</NavLink>
            |
            <span>{currentUser.full_name}</span>
            |
            <a href="#nope" onClick={handleSignOutClick}>Sign Out</a>
          </>
        </span>
      ) : (
        <NavLink exact to="/session/new">
          Sign In
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;
