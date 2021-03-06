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

export const signUp = (newUser) =>{

    return (dispatch, getState, {getFirebase})=>{
        const firestore = getFirebase().firestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials: newUser.firstName[0]+newUser.lastName[0],
                uid:resp.user.uid
            }).then(()=>{
                dispatch({type: 'SIGNUP_SUCCESS'})
            })
        }).catch(err =>{
            dispatch({type: 'SIGNUP_ERROR',err})
        });
    }
}

