import React, { useState } from "react";
import { Link } from "react-router-dom";

import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const ExpenseForm = ({ projectId }) => {
  const [expenseText, setExpenseText] = useState("");
  const [expenseCount, setExpenseCount] = useState("");
  const [expensePrice, setExpensePrice] = useState("");

  const [addExpense, { error }] = useMutation(ADD_EXPENSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addExpense({
        variables: {
          projectId,
          expenseText,
          expenseCount,
          expensePrice,
        },
      });

      setExpenseText("");
      setExpenseCount(0);
      setExpensePrice(0.0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "expenseText") {
      setExpenseText(value);
    }
    if (name === "expenseCount") {
      let intValue = Number(value);
      setExpenseCount(intValue);
    }
    if (name === "expensePrice") {
      let intValue = Number(value);
      setExpensePrice(intValue);
    }
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <form
          onSubmit={handleFormSubmit}
          // style={{ marginLeft: "2rem", marginRight: "2rem" }}
        >
          <Input
            placeholder="item..."
            name="expenseText"
            value={expenseText}
            onChange={handleChange}
            sx={{ height: "3rem", width: "25%", paddingLeft: "1rem" }}
          />
          <Input
            placeholder="count..."
            name="expenseCount"
            type="number"
            value={expenseCount}
            onChange={handleChange}
            sx={{ height: "3rem", width: "25%", paddingLeft: "2rem", textAlign: "right" }}
          />
          <Input
            placeholder="price..."
            name="expensePrice"
            type="number"
            value={expensePrice}
            onChange={handleChange}
            sx={{ height: "3rem", width: "25%", paddingLeft: "2rem" }}
          />
          <Button
            size="small"
            style={{ height: "3rem", width: "25%", cursor: "pointer" }}
            type="submit"
            variant="outlined"
          >
            ➕
          </Button>
        </form>
      ) : (
        <p>
          You need to be logged in to register your expenses for a project.
          Please <Link to="/login">login</Link> or{" "}
          <Link to="/signup">signup.</Link>
        </p>
      )}
    </>
  );
};

export default ExpenseForm;
