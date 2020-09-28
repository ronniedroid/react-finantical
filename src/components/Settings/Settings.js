import React from "react";
import AddBudget from "./AddBudget/AddBudget";
import BudgetSummary from "./BudgetSummary/BudgetSummary.jsx";
import AddCategory from "./AddCategory/AddCategory";
import SetSavings from "./SetSavings/SetSavings";

const Settings = () => {
  return (
    <div>
      <div>
      <AddBudget />
      <SetSavings />
      <BudgetSummary/>
      </div>
      <AddCategory />
    </div>
  );
};

export default Settings;
