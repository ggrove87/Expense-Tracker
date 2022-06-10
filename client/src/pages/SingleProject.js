import React from "react";

// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";

import { QUERY_SINGLE_PROJECT } from "../utils/queries";

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
    <div>
      <div>
        <ExpenseList
          expenses={project.expenses}
          projectTitle={project.projectTitle}
        />
      </div>
      <div>
        <ExpenseForm projectId={project._id} />
      </div>
    </div>
  );
};

export default SingleProject;
