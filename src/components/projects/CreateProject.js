import React from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';

const CreateProject = ({createProject})=>{
    let project = {
        title:'',
        content:''
    }
    return (
        <div className="container">
        <form className="white" onSubmit={(e) => {
          e.preventDefault();
          createProject({
            title:project.title.value,
            content:project.content.value
          });
        }}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' ref={(node) => {
            project.title = node;
            }} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" className="materialize-textarea" ref={(node) => {
            project.content = node;
            }}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return {
        createProject: (project)=>dispatch(createProject(project))
    }
}
//promer param es mapStateToProp en este caso innecesario
export default connect(null,mapDispatchToProps)(CreateProject);