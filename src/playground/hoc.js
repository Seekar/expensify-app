import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>this is info about : {props.info}</p>
    </div>
  );
};

const WithAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>this is private info, please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = WithAdminWarning(Info);

ReactDOM.render(<AdminInfo info="balalaban" />, document.getElementById("app"));
