import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expensesSelector";

const ExpensesList = props => {
  const { expenses } = props;

  return (
    <div>
      <h1>Expenses List ({`${expenses.length} items`})</h1>
      {expenses && (
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th>note</th>
              <th>Amount</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(exp => (
              <ExpenseListItem key={exp.id} expense={exp}></ExpenseListItem>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { expenses, filters } = state;
  return {
    expenses: getVisibleExpenses(expenses, filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
