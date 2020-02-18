const demoState = {
  expenses: [
    {
      id: "exp101",
      description: "buy a macbook pro",
      note: "this is the payment for my awesome macbook pro",
      amount: 7500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

export default demoState;
