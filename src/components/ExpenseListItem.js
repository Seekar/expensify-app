import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesActions";
import { Link } from "react-router-dom";

const ExpenseListItem = props => {
  const { id, description, note, amount, createdAt } = props.expense;
  return (
    <tr>
      <td>{description}</td>
      <td>{note}</td>
      <td>{amount}</td>
      <td>{createdAt}</td>
      <td>
        <button
          onClick={() => {
            props.dispatch(removeExpense(id));
          }}
        >
          Remove
        </button>
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
      </td>
    </tr>
  );
};

ExpenseListItem.propTypes = {
  //name: PropTypes.string
};

export default connect()(ExpenseListItem);
