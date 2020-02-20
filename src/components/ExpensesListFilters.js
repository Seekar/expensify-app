import React, { Component } from "react";
import { connect } from "react-redux";
import {
  sortByAmountFilter,
  sortByDateFilter,
  setTextFilter,
  setStartDateFilter,
  setEndDateFilter
} from "../actions/filtersActions";

import { DateRangePicker } from "react-dates";

class ExpensesListFilters extends Component {
  constructor(props) {
    super(props);
    this.state = { focusedInput: null };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = focusedInput => {
    this.setState(() => ({ focusedInput }));
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div>
        Search By :{" "}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        ></input>{" "}
        Sort By :{" "}
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

ExpensesListFilters.propTypes = {
  //name: PropTypes.string
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDateFilter()),
  sortByAmount: () => dispatch(sortByAmountFilter()),
  setStartDate: startDate => dispatch(setStartDateFilter(startDate)),
  setEndDate: endDate => dispatch(setEndDateFilter(endDate))
});

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export { ExpensesListFilters };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesListFilters);
