import React from 'react';
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
const GuardedRoute = ({ component: Component, auth, ...rest }) => {
    console.log(auth)
 return(
    <div></div>
)}
const mapStateToPropos = (state)=>{
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToPropos)(GuardedRoute);