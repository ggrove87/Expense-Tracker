import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ExpenseList = ({ expenses = [], projectTitle }) => {
  // let [totalCost, setTotalCost] = useState(0);
  let totalCost = 0;
  if (!expenses.length) {
    return <h3>No Expenses Yet</h3>;
  }

  for (let i = 0; i < expenses.length; i++) {
    totalCost += expenses[i].expenseCount * expenses[i].expensePrice;
  }

  return (
    <>
      <Typography color="text.primary" variant="h5" m={2}>
        {projectTitle} expenses - Current Total: {totalCost}
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Unit Count</TableCell>
              <TableCell align="right">Unit Price</TableCell>
              <TableCell align="right">Total Line Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="expense">
                  {expense.expenseText}
                </TableCell>
                <TableCell align="right">{expense.expenseCount}</TableCell>
                <TableCell align="right">{expense.expensePrice}</TableCell>
                <TableCell align="right">
                  {expense.expenseCount * expense.expensePrice}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ExpenseList;
