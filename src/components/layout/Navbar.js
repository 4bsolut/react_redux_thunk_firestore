import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';

const NavBar = () => {
  return (
    <nav className="nav-wrapper grey darkner-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Plan
        </Link>
        <SignedInLink />
        <SignedOutLink />
      </div>
    </nav>
  );
};

export default NavBar;
