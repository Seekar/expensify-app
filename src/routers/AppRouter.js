import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import HelpPage from "../components/HelpPage";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashBoardPage";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
