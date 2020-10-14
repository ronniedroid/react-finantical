import React, { useState, useContext } from "react";
import { expenseBookContext } from "../../../context/ExpenseBookContext";
import FormErr from "../../FormErr.jsx"

const SetSavings = () => {
  const defaultSavings = {
    totalSavings: "",
  };

  const [newSavings, setNewSavings] = useState(defaultSavings);
  const [isEditing, setIsEditing] = useState(false);
  const { setTotalSavings, expenseBook } = useContext(expenseBookContext);
  const [canSetSaving, setCanSetSaving] = useState(true)

  const submitSavingsHandler = (e) => {
    e.preventDefault();
    setTotalSavings(newSavings);
    setNewSavings(defaultSavings);
  };

  const savingsHandler = (e) => {
    if (e.target.value > Number(expenseBook.totalBudget)) {
      setCanSetSaving(false)
    } else {
      setNewSavings({
        ...newSavings,
        [e.target.name]: e.target.value,
      });
    }
  };

  const editHandler = () => {
    setIsEditing(!isEditing);
    setNewSavings({ totalSavings: String(expenseBook.totalSavings) });
  };

  const updateHandler = () => {
    setTotalSavings(newSavings);
    setIsEditing(!isEditing);
    setNewSavings({ totalSavings: "" });
  };

  const clearTheError = () => {
    setTimeout(() => setCanSetSaving(true), 3000)
  }

  return (
    <div className="set-savings-form">
      <h4>Set Savings</h4>
      <form onSubmit={submitSavingsHandler}>
        <label>
          Savings
          {/* Adding a intial savings amount */}
          {!expenseBook.totalSavings && (
            <input
              onChange={savingsHandler}
              name="totalSavings"
              value={newSavings.totalSavings}
              type="text"
            />
          )}
          {expenseBook.totalSavings && (
            <input
              onChange={savingsHandler}
              disabled={!isEditing}
              name="totalSavings"
              value={newSavings.totalSavings}
              type="text"
            />
          )}
        </label>
        {!expenseBook.totalSavings && <button>Add</button>}
        {isEditing && <button onClick={updateHandler}>Update</button>}
        {expenseBook.totalSavings && !isEditing && (
          <button onClick={editHandler}>Edit</button>
        )}
      </form>
      {!canSetSaving && <FormErr clearMessage={clearTheError} message={"Savings can't be bigger than total budget"} />}
    </div>
  );
};

export default SetSavings;
