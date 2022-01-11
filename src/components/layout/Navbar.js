import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLink from './SignedInLinks';
import SignedOutLink from './SignedOutLinks';
import { connect } from 'react-redux'

const NavBar = ({auth}) => {
  
  const links = auth.uid ? <SignedInLink /> :  <SignedOutLink />;
  return (
    <nav className="nav-wrapper grey darkner-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Plan
        </Link>
        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) =>{
  
  return {
    auth: state.firebase.auth
  }
}


export default connect(mapStateToProps)(NavBar);
