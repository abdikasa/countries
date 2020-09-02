import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ name, onClick }) => (
  <li key={name} onClick={onClick} value={name}>
    {name}
  </li>
);

const CountryDetails = ({ country }) => (
  <div>
    <h1>{country.name}</h1>
    <p>Capital: {country.capital}</p>
    <p>Population: {country.population}</p>
    <img src={country.flag} alt={country.flag}></img>
  </div>
);

const Details = ({ countries, onClick }) => {
  if (countries.length === 1) {
    return (
      <div>
        <CountryDetails countries={countries[0].name}></CountryDetails>
      </div>
    );
  } else if (countries.length < 11) {
    return (
      <div>
        <ol>
          {countries.map(() => (
            <Country
              key={country.name}
              name={country.name}
              onClick={onClick}
            ></Country>
          ))}
        </ol>
      </div>
    );
  } else {
    return (
      <div>
        <p>Too many countries, type more.</p>
      </div>
    );
  }
};

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

  const countryChange = () => {
    setFilter(event.target.innerText);
  };

  const alLCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(filter)
  );

  return <div></div>;
};

export default App;
