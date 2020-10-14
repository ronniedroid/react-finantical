import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const expenseBookContext = createContext();

const defaultState = {
  year: "",
  month: "",
  totalBudget: "",
  totalSavings: "",
  totalExpense: "",
  leftOver: "",
  categories: [],
  expenses: [],
};

const ExpenseBookProvider = (props) => {
  const [expenseBook, setExpenseBook] = useState(defaultState);

  useEffect(() => {
    const { totalBudget, totalSavings, totalExpense } = expenseBook;
    const remaingAmount =
      Number(totalBudget) - Number(totalSavings) - Number(totalExpense);
    setExpenseBook({
      ...expenseBook,
      leftOver: remaingAmount,
    });
  }, [
    expenseBook.totalBudget,
    expenseBook.totalSavings,
    expenseBook.totalExpense,
  ]);

  const addExpense = (expenseObj) => {
    // crete a Date Field. in the format of year, month, day
    const date = new Date().toISOString().slice(0, 10);
    // create id with uuid
    const id = uuid();
    // add the fileds date and id to the expense object
    expenseObj.id = id;
    expenseObj.date = date;
    // update the expenseBooks state
    setExpenseBook({
      ...expenseBook,
      expenses: [...expenseBook.expenses, expenseObj],
    });
  };

  const getExpenses = () => {
    return expenseBook.expenses;
  };

  const addCategory = (categoryObj) => {
    const newTotal =
      Number(expenseBook.totalExpense) + Number(categoryObj.amount);
    setExpenseBook({
      ...expenseBook,
      categories: [...expenseBook.categories, categoryObj],
      totalExpense: newTotal,
    });
  };

  const getCategories = () => {
    return expenseBook.categories;
  };

  const addTotalBudget = (budgetObj) => {
    const currentBudget = Number(expenseBook.totalBudget);
    const newBudget = Number(budgetObj.totalBudget) + currentBudget;
    setExpenseBook({
      ...expenseBook,
      totalBudget: String(newBudget),
    });
  };

  const setTotalSavings = (savingObj) => {
    const newSavings = Number(savingObj.totalSavings);
    setExpenseBook({
      ...expenseBook,
      totalSavings: String(newSavings),
    });
  };

  const getLeftOver = () => {
    return expenseBook.leftOver;
  };

  const providerObj = {
    expenseBook,
    addExpense,
    getExpenses,
    getCategories,
    addCategory,
    addTotalBudget,
    setTotalSavings,
    getLeftOver,
  };

  return (
    <expenseBookContext.Provider value={providerObj}>
      {props.children}
    </expenseBookContext.Provider>
  );
};

export default ExpenseBookProvider;
