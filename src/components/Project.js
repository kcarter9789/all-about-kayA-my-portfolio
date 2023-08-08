import React from 'react';

const Project = ({ name, githubRepo, deployedApp, image }) => {
  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          GitHub Repository: <a href={githubRepo} target="_blank" rel="noopener noreferrer">{githubRepo}</a>
        </p>
        <p className="card-text">
          Deployed App: <a href={deployedApp} target="_blank" rel="noopener noreferrer">{deployedApp}</a>
        </p>
      </div>
    </div>
  );
};

export default Project;
