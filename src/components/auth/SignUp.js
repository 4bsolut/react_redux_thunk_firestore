import React from 'react';

const SignUp = ()=>{
    let user = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    return (
        <div className="container">
        <form className="white">
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
        </form>
      </div>
    )
}
export default SignUp;