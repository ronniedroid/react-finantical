import React, { useContext, useState, useEffect, useRef } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";
import FormErr from "../../FormErr.jsx"

const ExpenseForm = () => {
  const defaultOptions = {
    amount: "",
    type: "",
    desc: "",
  };

  const [options, setOptions] = useState();
  const [newExpense, setNewExpense] = useState(defaultOptions);
  const { getCategories, addExpense, getExpenses } = useContext(
    expenseBookContext
  );
  // const [oldExpenses, setOldExpenses] = useState();
  const [categoryLimit, setCategoryLimit] = useState(0);
  const [canSubmit, setCanSubmit] = useState(true);

  const formRef = useRef();

  useEffect(() => {
    setOptions(getCategories());
  }, []);

  const validateExpense = () => {
    console.log("FROM VALIDATE EXPENSE")
    const filteredExpenses = getExpenses().filter((ex) => ex.type === newExpense.type)
    if (filteredExpenses.length !== 0) {
      const reduceTotal = filteredExpenses.reduce((acc, category) => acc + Number(category.amount), 0)
      const expenseTypeTotal = Number(newExpense.amount) + reduceTotal;
      if (expenseTypeTotal > categoryLimit) {
        setCanSubmit(false)
        return false
      }
    } else {
      if (Number(newExpense.amount) > categoryLimit) {
        setCanSubmit(false);
        return false
      }
    }
    return true
  }

  const submitExpense = (e) => {
    e.preventDefault();
    if (validateExpense()) {
    addExpense(newExpense);
    setNewExpense(defaultOptions);
    formRef.current.reset();
    }
  };

  const addExpenseHandler = (e) => {
    if (e.target.name === "type"){
      const [category] = options.filter((op) => op.name === e.target.value)
      setCategoryLimit(Number(category.amount))
    }
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value,
    });
  };

  const clearError = () => {
    setTimeout(() => setCanSubmit(true), 3000)
  }

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
          return (
            <option value={opt.name} key={i}>
              {opt.name}
            </option>
          );
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
      {!canSubmit && <FormErr clearMessage={clearError} message={"Expense amount is bigger than category limit"}/> }
    </form>
  );
};

export default ExpenseForm;
