import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

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
      let intValue = Number(value)
      setExpenseCount(intValue);  
    }
    if (name === 'expensePrice') {
      let intValue = Number(value)
      setExpensePrice(intValue); 
    }
  };

  return (
    <>

{Auth.loggedIn() ? (
      <form onSubmit={handleFormSubmit}>
        <Card align="center" sx={{ border: 1, maxWidth: 275, mx: 'auto', mt: '2rem' }}>
          <CardContent>
            <Typography color="text.secondary" variant="h5" gutterBottom>What expense are you adding for this project?</Typography>

            <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="item..." variant="outlined"
                name="expenseText"
                value={expenseText}
                onChange={handleChange} />

              <TextField id="outlined-basic" label="unit count..." variant="outlined"
                name="expenseCount"
                type="number"
                value={expenseCount}
                onChange={handleChange} />

              <TextField id="outlined-basic" label="unit price..." variant="outlined"
                name="expensePrice"
                type="number"
                value={expensePrice}
                onChange={handleChange} />
            </Box>

          </CardContent>

          <CardActions style={{ justifyContent: 'center' }}>
            <Button size="small" style={{ cursor: 'pointer' }} sx={{ mb: '1rem' }} type="submit" variant="outlined">Add Expense</Button>
          </CardActions>

        </Card>
      </form>
      ) : (
        <p>
          You need to be logged in to register your expenses for a project. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </>
  );
};

export default ExpenseForm;
