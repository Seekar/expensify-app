import {
  loadExpenses,
  addExpense,
  removeExpense,
  editExpense
} from "../../actions/expensesActions";
import { string } from "prop-types";

test("should return LOAD_EXPENSES action ", () => {
  const result = loadExpenses();
  expect(result).toEqual({
    type: "LOAD_EXPENSES"
  });
});

test("should return ADD_EXPENSE action and expense to add ", () => {
  const result = addExpense({
    description: "description",
    note: "note",
    amount: 100,
    createdAt: 5787
  });
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "description",
      note: "note",
      amount: 100,
      createdAt: 5787
    }
  });
});

test("should return ADD_EXPENSE action and default expense to add ", () => {
  const result = addExpense({});
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("should return EDIT_EXPENSE action,id and updates", () => {
  const result = editExpense("id101", {
    note: "note",
    amount: 150
  });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "id101",
    updates: {
      note: "note",
      amount: 150
    }
  });
});

test("should return REMOVE_EXPENSE action and id", () => {
  const result = removeExpense("id101");
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    id: "id101"
  });
});
