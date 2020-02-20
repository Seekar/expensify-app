import {
  loadFilters,
  setTextFilter,
  sortByDateFilter,
  sortByAmountFilter,
  setEndDateFilter,
  setStartDateFilter
} from "../../actions/filtersActions";

test("should return SET_START_DATE action ", () => {
  const result = setStartDateFilter(655876);
  expect(result).toEqual({
    type: "SET_START_DATE",
    startDateFilter: 655876
  });
});

test("should return SET_END_DATE action ", () => {
  const result = setEndDateFilter(6578686);
  expect(result).toEqual({
    type: "SET_END_DATE",
    endDateFilter: 6578686
  });
});

test("should return LOAD_FILTERS action ", () => {
  const result = loadFilters();
  expect(result).toEqual({
    type: "LOAD_FILTERS"
  });
});

test("should return SET_TEXT_FILTER action with textFilter = 'test' ", () => {
  const result = setTextFilter("test");
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    textFilter: "test"
  });
});

test("should return SORT_BY_AMOUNT action ", () => {
  const result = sortByAmountFilter();
  expect(result).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should return SORT_BY_DATE action ", () => {
  const result = sortByDateFilter();
  expect(result).toEqual({
    type: "SORT_BY_DATE"
  });
});
