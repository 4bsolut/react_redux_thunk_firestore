import React from 'react';
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { connect } from 'react-redux';
const GuardedRoute = ({ auth, children }) => {
    return auth.uid ?  children : <Navigate to="/signin" />;
}
const mapStateToPropos = (state)=>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToPropos)(GuardedRoute);