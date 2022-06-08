import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({
  projects,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    return <h3>No Projects Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/me`}
                >
                  {project.projectAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this project on {project.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this project on {project.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{project.projectTitle}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}`}
            >
              Join the discussion on this project.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
