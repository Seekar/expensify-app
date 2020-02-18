import { createStore } from "redux";

const incrementCount = (payload = {}) => {
  const { incBy } = payload;
  return {
    type: "INCREMENT",
    incBy: typeof incBy === "number" ? incBy : 1
  };
};

const decrementCount = (payload = {}) => {
  const { decBy } = payload;
  return {
    type: "DECREMENT",
    decBy: typeof decBy === "number" ? decBy : 1
  };
};

const resetCount = () => ({ type: "RESET" });

const setCount = (payload = {}) => {
  const { count } = payload;
  return {
    type: "SET",
    count: typeof count === "number" ? count : 0
  };
};

const countReducer = (state = { count: 0 }, action) => {
  const { type, incBy, decBy, count } = action;
  switch (type) {
    case "INCREMENT":
      state.count += incBy;
      return state;
    case "DECREMENT":
      state.count -= decBy;
      return state;
    case "RESET":
      state.count = 0;
      return state;
    case "SET":
      state.count = count;
      return state;
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incBy: 100 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decBy: 50 }));

store.dispatch(setCount({ count: 1000 }));
