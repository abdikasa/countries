import React from "react";

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

  console.log(filteredResults);
  return (
    <div>
      <div>
        {/* Show detailed information for one country */}
        {oneCountry
          ? filteredResults.map((country) => {
              return (
                <div key={genKey(country.gini)}>
                  <h2>{country.name}</h2>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                  <h3>languages</h3>
                  <ul>
                    {allLanguages.map((lang) => (
                      <li key={lang.name}>{lang.name}</li>
                    ))}
                  </ul>
                  <img src={country.flag} alt="" />
                </div>
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
