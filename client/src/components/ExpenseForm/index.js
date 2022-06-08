import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_EXPENSE } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ExpenseForm = ({ projectId }) => {
  const [expenseText, setExpenseText] = useState('');
  const [expenseCount, setExpenseCount] = useState('');
  const [expensePrice, setExpensePrice] = useState('');


  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          projectId,
          expenseText,
          expenseCount,
          expensePrice
        },
      });

      setExpenseText('');
      setExpenseCount(0)
      setExpensePrice(0.00)
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'expenseText') {
      setExpenseText(value);  
    }
    if (name === 'expenseCount') {
      setExpenseText(value);  
    }
    if (name === 'expensePrice') {
      setExpenseText(value); 
    }
  };

  return (
    <div>
      <h4>What are your expenses on this project?</h4>

      {Auth.loggedIn() ? (
        <>
          
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="expenseText"
                placeholder="Add your expense..."
                value={expenseText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
              <input type="number"
                name="expenseCount"
                placeholder="How many units are you purchasing?"
                value={expenseCount}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
              <input type="number"
                name="expensePrice"
                placeholder="How much does each unit cost?"
                value={expensePrice}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Expense
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to register your expenses for a project. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ExpenseForm;
