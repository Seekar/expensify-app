import demoState from "../store/DataStore";

const expenseReducerDefaultState = [];

const expensesReducer = (state = expenseReducerDefaultState, action) => {
  const { type, expense, id, updates } = action;
  const { expenses } = demoState;
  switch (type) {
    case "LOAD_EXPENSES":
      return (state = expenses);
    case "ADD_EXPENSE":
      return [...state, expense];
    case "REMOVE_EXPENSE":
      return state.filter(exp => exp.id !== id);
    case "EDIT_EXPENSE":
      return state.map(exp => {
        return exp.id === id ? { ...exp, ...updates } : exp;
      });
    default:
      return state;
  }
};

export default expensesReducer;
