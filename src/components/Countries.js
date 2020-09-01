import React from "react";

const Countries = ({ filteredResults, checkInput }) => {
  const checkIfEmpty = checkInput.length === 0 ? true : false;
  const checkIfOne = filteredResults[0].area === undefined ? true : false;
  console.log(checkIfOne, checkIfEmpty, filteredResults[0]);
  const oneCountry =
    !checkIfEmpty && !checkIfOne && filteredResults.length === 1;
  const allLanguages = !checkIfOne ? filteredResults[0].languages : "";

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  return (
    <div>
      <div>
        {/* Show detailed information for one country */}
        {oneCountry
          ? filteredResults.map((country) => {
              return (
                <>
                  <h2>{country.name}</h2>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                  <h3>languages</h3>
                  <ul>
                    {allLanguages.map((lang) => (
                      <li key={generateKey(lang.name)}>{lang.name}</li>
                    ))}
                  </ul>
                </>
              );
            })
          : ""}

        <ul>
          {/* Show under 11 country names matched */}
          {filteredResults.length < 11 && !checkIfEmpty && !oneCountry
            ? filteredResults.map((country) => {
                return <li key={country.numericCode}>{country.name} </li>;
              })
            : ""}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
