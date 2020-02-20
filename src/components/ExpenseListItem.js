import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expensesActions";
import { Link } from "react-router-dom";

class ExpenseListItem extends React.Component {
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id);
  };

  render() {
    const { id, description, note, amount, createdAt } = this.props.expense;
    return (
      <tr>
        <td>{description}</td>
        <td>{note}</td>
        <td>{amount}</td>
        <td>{createdAt}</td>
        <td>
          <button onClick={this.onRemove}>Remove</button>
          <Link to={`/edit/${id}`}>
            <button>Edit</button>
          </Link>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeExpense: data => dispatch(removeExpense(data))
});

ExpenseListItem.propTypes = {
  //name: PropTypes.string
};

export { ExpenseListItem };

export default connect(undefined, mapDispatchToProps)(ExpenseListItem);
