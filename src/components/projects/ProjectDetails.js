import React from 'react';
import { useParams } from 'react-router-dom';
const ProjectDetails = () => {
  const { id } = useParams();
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title</span>
          <p>Lorem ipsu jajajja</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by R ninja</div>
          <div>2d Septemver , 2am</div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetails;
