import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// 2.12* Data for countries, step1 --- Finished
// The API https://restcountries.eu provides a data for different countries in a machine readable format, a so-called REST API.
// Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint all.
// The user interface is very simple. The country to be shown is found by typing a search query into the search field.
// If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

// 2.13*: Data for countries, step2 ---FINNISHHED
// Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

ReactDOM.render(<App />, document.getElementById("root"));
