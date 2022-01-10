import React from 'react';

const SignIn = () => {
    let user = {
        email:'',
        password:''
    }
    return(
        <div className="container">
        <form className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' ref={(node) => {
            user.password = node;
          }} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' ref={(node) => {
            user.email = node;
          }} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div> 
    )
}

export default SignIn;