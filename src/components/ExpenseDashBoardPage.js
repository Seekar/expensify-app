import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesListFilters from "./ExpensesListFilters";

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesListFilters />
      <ExpensesList />
    </div>
  );
};

ExpenseDashboardPage.propTypes = {
  //name: PropTypes.string
};

export default ExpenseDashboardPage;
