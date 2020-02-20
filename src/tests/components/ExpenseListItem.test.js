import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

let removeExpense, history, wrapper;

beforeEach(() => {
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <ExpenseListItem
      removeExpense={removeExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render ExpensesListItem with expenses", () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test("should handle removeExpense", () => {
  wrapper
    .find("button")
    .first()
    .simulate("click");
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[2].id);
});
