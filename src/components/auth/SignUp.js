import React from 'react';
import { signUp } from '../../store/actions/authActions';
import { connect } from 'react-redux';
const SignUp = ({signUp, authError})=>{
    let user = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    return (
        <div className="container">
        <form className="white" onSubmit={(e) => {
          e.preventDefault();
          signUp({
            email:user.email.value,
            password:user.password.value,
            firstName: user.firstName.value,
            lastName:user.lastName.value,
          });
        }}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' ref={(node) => {
            user.email = node;
          }} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' ref={(node) => {
            user.password = node;
            }}  />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' ref={(node) => {
            user.firstName = node;
            }} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName' ref={(node) => {
            user.lastName = node;
            }} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
          </div>
          <div className="red-text center">
               {authError ? <p>{authError}</p> : null}
          </div>
        </form>
      </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp: (user)=>dispatch(signUp(user))
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);