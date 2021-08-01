import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Form";
import FormikForm from "./FormikForm";
import FinalForm from "./FinalForm";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
    <Form />
    <FormikForm />
    <FinalForm />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
