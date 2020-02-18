const loadFilters = () => {
  return {
    type: "LOAD_FILTERS"
  };
};

const setTextFilter = textFilter => {
  return {
    type: "SET_TEXT_FILTER",
    textFilter
  };
};

const setStartDateFilter = startDateFilter => {
  return {
    type: "SET_START_DATE",
    startDateFilter
  };
};

const setEndDateFilter = endDateFilter => {
  return {
    type: "SET_END_DATE",
    endDateFilter
  };
};

const sortByAmountFilter = () => {
  return {
    type: "SORT_BY_AMOUNT"
  };
};

const sortByDateFilter = () => {
  return {
    type: "SORT_BY_DATE"
  };
};

export {
  loadFilters,
  setTextFilter,
  sortByDateFilter,
  sortByAmountFilter,
  setEndDateFilter,
  setStartDateFilter
};
