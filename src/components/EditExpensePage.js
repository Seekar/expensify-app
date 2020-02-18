import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expensesActions";

const EditExpensePage = props => {
  return (
    <div>
      <h1>Edit expense of id : {props.match.params.id}</h1>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push("/");
        }}
      />
    </div>
  );
};

// const mapDispatchToProps = { editExpense };

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

EditExpensePage.propTypes = {
  //name: PropTypes.string
};

export default connect(mapStateToProps)(EditExpensePage);
