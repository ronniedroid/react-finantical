import React from "react";

const Expense = ({ expense }) => {
  const { amount, type, date, desc } = expense;

  return (
    <div>
      <h4>{type}</h4>
      <p>Amount: {amount}</p>
      <p>Date: {date}</p>
      <p>Desc: {desc}</p>
    </div>
  );
};

export default Expense;
