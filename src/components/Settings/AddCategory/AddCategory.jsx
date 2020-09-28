import React, { useState, useContext } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";

const AddCategory = () => {
  const defaultState = {
    name: "",
    amount: "",
  };

  const [newCategory, setNewCategory] = useState(defaultState);

  const { addCategory } = useContext(expenseBookContext);

  const submitHandler = (e) => {
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory(defaultState);
  };

  const changeHandler = (e) => {
    setNewCategory({
      ...newCategory,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-category-form">
      <h4>Add Category</h4>
      <form onSubmit={submitHandler}>
        <label>
          Limit
          <input
            onChange={changeHandler}
            value={newCategory.amount}
            name="amount"
            type="text"
          />
        </label>
        <label>
          Name
          <input
            onChange={changeHandler}
            value={newCategory.name}
            name="name"
            type="text"
          />
        </label>
        <button className="add-category-btn">Add</button>
      </form>
    </div>
  );
};

export default AddCategory;
