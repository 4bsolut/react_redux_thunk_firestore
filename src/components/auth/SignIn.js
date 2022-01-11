import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';



const SignIn = ( {signIn, authError}) => {
  
 
    let user = {
        email:'',
        password:''
    }
    return(
        <div className="container">
        <form className="white" onSubmit={(e) => {
          e.preventDefault();
          signIn({
            email:user.email.value,
            password:user.password.value
          });
        }}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
          }} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
               {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div> 
    )
}
const mapDispatchToProps = (dispatch)=>{
  return {
    signIn: (creds)=>dispatch(signIn(creds))
  }
}
const mapStateToProps = (state)=>{
  //console.log(state);
  return {
    authError : state.auth.authError
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);