import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";

const promise = axios.get("http://localhost:3001/notes");
promise.then((response) => {
  ReactDOM.render(
    <App notes={response.data} />,
    document.getElementById("root")
  );
});
