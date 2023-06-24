import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectContent from '../../components/ProjectContent';
import './styles.scss';

function Project() {
  const location = useLocation();
  return (
    <div>
      {location.state && (
        <div className="project-details">
          <h1 className="font-bold">{location.state.title}</h1>
          <ProjectContent slug="kedai" />
        </div>
      )}
    </div>
  );
}

export default Project;
