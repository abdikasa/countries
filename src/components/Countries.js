import React, { useState } from "react";
import Country from "./Country";

const Countries = ({ filteredResults, checkInput }) => {
  const checkIfEmpty = checkInput.length === 0;
  const checkIfOne = filteredResults[0].area === undefined;
  const oneCountry =
    !checkIfEmpty && !checkIfOne && filteredResults.length === 1;
  const allLanguages = !checkIfOne ? filteredResults[0].languages : "";
  const genKey = (key) => {
    return (`${key}_` + Math.floor(Math.random() * 1000)).toString();
  };

  let [countries, setcountries] = useState(Array(10).fill({}));
  const [showAll, setShow] = useState(false);

  const tenCountries = () => {
    if (filteredResults.length < 11 && !checkIfEmpty && !oneCountry) {
      filteredResults = filteredResults.map((c) => {
        c.show = false;
        return c;
      });
      countries = filteredResults;
      setcountries(countries);
      setShow(false);
      return true;
    } else {
      return false;
    }
  };

  const handleClick = (event) => {
    //if true, show the buttons with teh expanded content
    if (tenCountries()) {
      //get our desired target country
      const target = event.target.previousElementSibling.textContent;

      //find the name of the country inisde the list
      let desired = countries.filter((c) => {
        //once found, set the created show property to true.
        if (c.name.trim() === target.trim()) {
          c.show = true;
        }
        return c.name.trim() === target.trim();
      });
    }
  };

  return (
    <div>
      <div>
        {/* Show detailed information for one country */}
        {oneCountry
          ? filteredResults.map((country) => (
              <div key={genKey(country.gini)}>
                <Country languages={allLanguages} country={country} />
              </div>
            ))
          : ""}
      </div>
      <ul>
        {/* Show under 11 country names matched */}
        {filteredResults.length < 11 && !checkIfEmpty && !oneCountry
          ? filteredResults.map((country) => {
              return (
                <div key={genKey(country.name)}>
                  <li key={country.numericCode}>{country.name} </li>

                  {/* {Only show button for non error messages} */}
                  {filteredResults.length !== 1 ? (
                    <button onClick={handleClick}>show more</button>
                  ) : (
                    ""
                  )}
                  {country.show ? (
                    <Country languages={country.languages} country={country} />
                  ) : (
                    ""
                  )}
                </div>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default Countries;
