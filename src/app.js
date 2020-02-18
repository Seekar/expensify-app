import ReactDOM from "react-dom";
import React from "react";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { addExpense } from "./actions/expensesActions";
import { Provider } from "react-redux";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water bill",
    note: "note of Water bill",
    amount: 1000,
    createdAt: 245
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "note of Gas bill",
    amount: 300,
    createdAt: 678
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    note: "note of Rent",
    amount: 500,
    createdAt: 98
  })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
