import React, { useContext } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

const BudgetSummary = () => {
  const { expenseBook, getLeftOver } = useContext(expenseBookContext);

  return (
    <div className="budget-summary-form">
      <h4>Info</h4>
      <p>Budget: {expenseBook.totalBudget}</p>
      <p>Savings: {expenseBook.totalSavings}</p>
      <p>Remaining: {getLeftOver()}</p>
    </div>
  );
};

export default BudgetSummary;
