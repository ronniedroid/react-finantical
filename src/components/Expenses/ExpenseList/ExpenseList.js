import React, { useContext, useState, useEffect } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

import Expense from "./Expense/Expense";

const ExpenseList = () => {

const { getExpenses, expenseBook } = useContext(expenseBookContext);

const [expenses, setExpenses] = useState();

useEffect(() => {
  setExpenses(getExpenses());
}, [expenseBook]);

if(!expenses){
  return <h1>loading</h1>
}

  return (
    <div>
      <h1>ExpenesList</h1>
      <div>
        {expenses.map((expense) => {
          return <Expense expense={expense}/>;
        })}
      </div>
    </div>
  );
};

export default ExpenseList;
