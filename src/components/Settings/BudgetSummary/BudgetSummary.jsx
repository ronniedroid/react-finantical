import React, { useContext } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

const BudgetSummary = () => {
  const { expenseBook } = useContext(expenseBookContext);

  return (
    <div>
      <h4>Info</h4>
      <p>Budget: {expenseBook.totalBudget}</p>
      <p>Savings: {expenseBook.totalSavings}</p>
      <p>
        Remaining:
        {Number(expenseBook.totalBudget) - Number(expenseBook.totalSavings)}
      </p>
    </div>
  );
};

export default BudgetSummary;
