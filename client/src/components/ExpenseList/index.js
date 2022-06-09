import React from "react";

const ExpenseList = ({ expenses = [] }) => {
  // let [totalCost, setTotalCost] = useState(0);
  let totalCost = 0 
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  for (let i = 0; i < expenses.length; i++) {
    totalCost += expenses[i].expenseCount * expenses[i].expensePrice
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
                <h5 className="card-header"> Expense Item: 
                {expense.expenseText}
                </h5>
                <p className="card-body">Number of Units: {expense.expenseCount}</p>
                <p className="card-body">Unit Price: {expense.expensePrice}</p>
                <p className="card-body">Total Line Cost: 
                    {expense.expenseCount * expense.expensePrice}
                  </p>
              </div>
            </div>
          ))}
          <p>Project Total Cost:{totalCost}</p>
      </div>
    </>
  );
};

export default ExpenseList;
