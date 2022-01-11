export const signIn = (credentials)=>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            console.log('Login success')
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch(err=>{
            console.log('Login error')
            dispatch({type:'LOGIN_ERROR',err});
        })
    }
}
export const signOut = () =>{
    return (dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = () =>{
    
}

