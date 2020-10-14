import React from "react";
import AddBudget from "./AddBudget/AddBudget";
import BudgetSummary from "./BudgetSummary/BudgetSummary.jsx";
import AddCategory from "./AddCategory/AddCategory.jsx";
import SetSavings from "./SetSavings/SetSavings.jsx";

const Settings = () => {
  return (
    <div>
      <div className="budget-section-forms">
        <AddBudget />
        <SetSavings />
        <BudgetSummary />
      </div>
      <AddCategory />
    </div>
  );
};

export default Settings;
