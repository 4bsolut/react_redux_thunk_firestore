import React from 'react';
import { Navigate } from "react-router-dom";
import { connect } from 'react-redux';
const InnerPagesRoutes = ({ auth, children}) => {
    return auth.uid ? <Navigate to="/" />  : children ;
}
const mapStateToPropos = (state)=>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToPropos)(InnerPagesRoutes);