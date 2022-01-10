export const createProject = (project) =>{
    return ( (dispatch, getState,{ getFirebase })=>{
        //make async
        const firestore = getFirebase().firestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'lala',
            authorLastName:'lol',
            authorId:123,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_PROJECT', project:project});
        }).catch((err)=>{
            dispatch({type:'CREATE_PROJECT_ERROR', err});
        })
    } )
}