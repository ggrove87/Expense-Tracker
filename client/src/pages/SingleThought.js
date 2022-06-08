import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';


const SingleProject = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
        {project.projectAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this project on {project.createdAt}
        </span>
      </h3>
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {project.projectText}
        </blockquote>
      </div>

      <div className="my-5">
        <ExpenseList expenses={project.expenses} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ExpenseForm projectId={project._id} />
      </div>
    </div>
  );
};

export default SingleProject;
