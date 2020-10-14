import React, { useState, useContext, useEffect } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";
import FormErr from "../../FormErr.jsx"


const AddCategory = () => {
  const defaultState = {
    name: "",
    amount: "",
  };

  const [newCategory, setNewCategory] = useState(defaultState);

  const { addCategory, getLeftOver } = useContext(expenseBookContext);

  const [theLimit, setTheLimit] = useState(0)
  const [canAdd, setCanAdd] = useState(true)

  useEffect(() => {
    setTheLimit(getLeftOver())
  },[getLeftOver()])

  const validateCategory = () => {
    if (Number(newCategory.amount) > Number(theLimit)) {
      setCanAdd(false)
      return false
    }
    return true
  }

  const clearMessage = () => {
    setTimeout(() => setCanAdd(true), 3000)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateCategory()) {
    addCategory(newCategory);
    setNewCategory(defaultState);
    }
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
        {!canAdd && <FormErr clearMessage={clearMessage} message={"Category limit bigger than remaining budget"}/>}
      </form>
    </div>
  );
};

export default AddCategory;
