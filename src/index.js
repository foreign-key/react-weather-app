import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Weather from "../src/components/Weather";

var destination = document.querySelector("#weatherBody");
require("dotenv").config();

ReactDOM.render(
  <React.Fragment>
    <Weather />
  </React.Fragment>,
  destination
);
