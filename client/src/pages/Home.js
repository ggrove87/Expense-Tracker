import React from 'react';
import { useQuery } from '@apollo/client';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <p className="m-0">Welcome to the Expense Tracker, where monitoring home-project budgets is made easy.</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
