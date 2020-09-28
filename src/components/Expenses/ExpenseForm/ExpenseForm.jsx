import React, { useContext, useState, useEffect, useRef } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

const ExpenseForm = () => {
  const defaultOptions = {
    amount: "",
    type: "",
    desc: "",
  };

  const [options, setOptions] = useState();
  const [newExpense, setNewExpense] = useState(defaultOptions);
  const { getCategories, addExpense } = useContext(expenseBookContext);
  const formRef = useRef()

  useEffect(() => {
    setOptions(getCategories());
  }, []);

  const submitExpense = (e) => {
    e.preventDefault()
    addExpense(newExpense)
    setNewExpense(defaultOptions)
    formRef.current.reset()
  }

  const addExpenseHandler = (e) => {
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  if (!options) {
    return <h1>loading</h1>;
  }

  return (
    <form ref={formRef} onSubmit={submitExpense} className="expense-form">
      <label className="expense-amount-label">
        Amount
        <input
          onChange={addExpenseHandler}
          value={newExpense.amount}
          type="text"
          name="amount"
        className="expense-amount-input"
        />
      </label>
      <select onChange={addExpenseHandler} name="type">
        <option value="select">Select</option>
        {options.map((opt, i) => {
          return <option value={opt.name} key={i}>{opt.name}</option>;
        })}
      </select>
      <label className="expense-desc-label">
        Desc
        <input
          onChange={addExpenseHandler}
          value={newExpense.desc}
          name="desc"
          type="text"
          className="expense-desc-input"
        />
      </label>
      <button className="add-expense-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
