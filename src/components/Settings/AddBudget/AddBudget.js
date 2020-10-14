import React, { useState, useContext } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

const AddBudget = () => {
  const defaultState = {
    totalBudget: "",
  };

  const [newBudget, setNewBudget] = useState(defaultState);

  const { addTotalBudget } = useContext(expenseBookContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addTotalBudget(newBudget);
    setNewBudget(defaultState);
  };

  const changeHandler = (e) => {
    setNewBudget({
      ...newBudget,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-budget-form">
      <h4>Add Budget</h4>
      <form onSubmit={submitHandler}>
        <label>
          Budget
          <input
            onChange={changeHandler}
            value={newBudget.totalBudget}
            name="totalBudget"
            type="text"
          />
        </label>
        <button className="add-Budget-btn">Add</button>
      </form>
    </div>
  );
};

export default AddBudget;
