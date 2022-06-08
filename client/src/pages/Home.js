import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

import { QUERY_PROJECTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ProjectForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Some Feed for Project(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
