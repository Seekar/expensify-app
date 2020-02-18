import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expensesActions";

const AddExpensePage = props => {
  return (
    <div>
      <h1>Add expense</h1>
      <ExpenseForm
        onSubmit={expense => {
          props.dispatch(addExpense(expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

// const mapDispatchToProps = { addExpense };

AddExpensePage.propTypes = {
  //name: PropTypes.string
};

export default connect()(AddExpensePage);
