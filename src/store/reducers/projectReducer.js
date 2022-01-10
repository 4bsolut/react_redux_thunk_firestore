const inistState = {
    projects:[
        {
            id:1, title:'project 1', content: 'content project 1'
        },
        {
            id:2, title:'project 2', content: 'content project 2'
        },
        {
            id:3, title:'project 2', content: 'content project 2'
        }

    ]
};

const projectReducer =(state = inistState, action) =>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created',action.project);
        return state;
        case  'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err)
        return state;
        default:
            return state;
        
    }
}

export default projectReducer;