import uuid from "uuid";

const loadExpenses = () => {
  return {
    type: "LOAD_EXPENSES"
  };
};

const addExpense = expenseToAdd => {
  const {
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
  } = expenseToAdd;
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};

const removeExpense = id => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};

export { loadExpenses, addExpense, removeExpense, editExpense };
