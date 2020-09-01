import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [filterValue, setFilter] = useState("");
  const [countries, saveCountries] = useState([]);
  const errorMsg = [
    [{ name: "no data is found", numericCode: "9998" }],
    [{ name: "Too many matches, specify another filter", numericCode: "9999" }],
  ];

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      saveCountries(res.data);
    });
  };

  useEffect(hook, []);

  const filteredResults = () => {
    const getCountries = countries.filter((c) =>
      c.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    console.log(getCountries);
    if (getCountries.length === 0) {
      return errorMsg[0];
    } else if (getCountries.length > 10) {
      return errorMsg[1];
    }
    return getCountries;
  };

  const inputChange = (event) => setFilter(event.target.value);

  return (
    <div>
      filter countries here:{" "}
      <input value={filterValue} onChange={inputChange} />
      <Countries
        filteredResults={filteredResults()}
        checkInput={filterValue}
      ></Countries>
    </div>
  );
};

export default App;
