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

  render() {
    return (
      <div>
        Search By :{" "}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        ></input>{" "}
        Sort By :{" "}
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            e.target.value === "date"
              ? this.props.dispatch(sortByDateFilter(e.target.value))
              : this.props.dispatch(sortByAmountFilter(e.target.value));
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="end_date_id"
          onDatesChange={({ startDate, endDate }) => {
            this.props.dispatch(setStartDateFilter(startDate));
            this.props.dispatch(setEndDateFilter(endDate));
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
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

// const mapDispatchToProps = {
//   sortByAmountFilter,
//   sortByDateFilter,
//   setTextFilter
// };

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpensesListFilters);
