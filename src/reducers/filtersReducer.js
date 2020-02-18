import demoState from "../store/DataStore";
import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  const { type, startDateFilter, endDateFilter, textFilter } = action;
  const { filters } = demoState;
  switch (type) {
    case "LOAD_FILTERS":
      return (state = filters);
    case "SET_TEXT_FILTER":
      return { ...state, text: textFilter };
    case "SET_START_DATE":
      return { ...state, startDate: startDateFilter };
    case "SET_END_DATE":
      return { ...state, endDate: endDateFilter };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    default:
      return state;
  }
};

export default filtersReducer;
