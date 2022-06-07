import React from 'react';

const ExpenseList = ({ expenses = [] }) => {
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Expenses
      </h3>
      <div className="flex-row my-4">
        {expenses &&
          expenses.map((expense) => (
            <div key={expense._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {expense.expenseAuthor} expenseed{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {expense.createdAt}
                  </span>
                </h5>
                <p className="card-body">{expense.expenseText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ExpenseList;
