import React from "react";
import Country from "./Country";

const Countries = ({ filteredResults, checkInput }) => {
  const checkIfEmpty = checkInput.length === 0;
  const checkIfOne = filteredResults[0].area === undefined;
  console.log(checkIfOne, checkIfEmpty, filteredResults[0]);
  const oneCountry =
    !checkIfEmpty && !checkIfOne && filteredResults.length === 1;
  const allLanguages = !checkIfOne ? filteredResults[0].languages : "";

  const genKey = (key) => {
    console.log(`${key}_` + Math.floor(Math.random() * 1000));
    return (`${key}_` + Math.floor(Math.random() * 1000)).toString();
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
              return <li key={country.numericCode}>{country.name} </li>;
            })
          : ""}
      </ul>
    </div>
  );
};

export default Countries;
