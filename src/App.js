import React, { useState, useEffect } from "react";
import axios from "axios";

//Create a Country Component to hold the basic li statement.
const Country = ({ name, onClick }) => (
  <li key={name} onClick={onClick} value={name}>
    {name}
  </li>
);

//Handles the main country details when one and only one country is selected
const CountryDetails = ({ country }) => (
  <div>
    <h1>{country.name}</h1>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <h2>Languages</h2>
    <ul>
      {country.languages.map((lang) => (
        <li key={lang.name}>{lang.name}</li>
      ))}
    </ul>
    <img src={country.flag} alt={country.flag} style={flagStyle}></img>
  </div>
);

const flagStyle = {
  width: "300px",
  border: "1px solid #000",
};

//Determines what to output and depends on the filter input search.
const Details = ({ countries, filter }) => {
  if (filter.trim().length === 0) {
    return "";
  } else if (countries.length === 1) {
    return (
      <div>
        <CountryDetails country={countries[0]}></CountryDetails>
      </div>
    );
  } else if (countries.length < 11) {
    return (
      <div>
        <ol>
          {countries.map((country) => (
            <Country key={country.name} name={country.name}></Country>
          ))}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }
};

//brings everything altogether; i had to change the person's code to use hooks, they were using classes, so good practice for me in converting legacy code.

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filterChange = (event) => {
    setFilter(event.target.value);
  };

  const alLCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <div>
        Find countries: <input value={filter} onChange={filterChange}></input>
      </div>
      <div>
        <Details countries={alLCountries} filter={filter}></Details>
      </div>
    </div>
  );
};

export default App;
