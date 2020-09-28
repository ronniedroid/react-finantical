import React from "react";

import ExpenseForm from "./ExpenseForm/ExpenseForm.jsx";
import ExpenseList from "./ExpenseList/ExpenseList";

const Expenses = () => {
  return (
    <div className="expenses">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default Expenses;
