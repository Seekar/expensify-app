import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        DashBoard
      </NavLink>

      <NavLink to="/create" activeClassName="is-active">
        {" "}
        Add Expense
      </NavLink>

      {/*       <NavLink to="/edit" activeClassName="is-active">
        {" "}
        Edit Expense
      </NavLink> */}

      <NavLink to="/help" activeClassName="is-active">
        {" "}
        Help
      </NavLink>
    </header>
  );
};

Header.propTypes = {
  //name: PropTypes.string
};

export default Header;
