import React, { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";

const App = () => {
  const [filterValue, setFilter] = useState("");
  const [countries, saveCountries] = useState([]);

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
      saveCountries(res.data);
      console.log(res.data);
    });
  };

  useEffect(hook, []);

  const filteredResults =
    filterValue.trim().length === 0
      ? [{ name: "no data is found", numericCode: "9999" }]
      : countries.filter((c) => c.name.includes(filterValue));

  const inputChange = (event) => setFilter(event.target.value);

  return (
    <div>
      filter countries here:{" "}
      <input value={filterValue} onChange={inputChange} />
      <Countries filteredResults={filteredResults}></Countries>
    </div>
  );
};

export default App;
