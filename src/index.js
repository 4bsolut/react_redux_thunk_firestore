import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from 'redux';
import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import  thunk  from 'redux-thunk';
import { getFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase , ReactReduxFirebaseProvider} from "react-redux-firebase";
import firebase from './config/fbConfig'

const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };
const store = createStore(rootReducer, 
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
);
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance 
}

ReactDOM.render(
<Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
</Provider>, document.getElementById("root"));
