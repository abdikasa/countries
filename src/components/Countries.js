import React, { useState, useEffect } from "react";
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

  let [btn, setbtn] = useState(Array(10).fill({}));
  const [showAll, setShow] = useState(false);

  const tenCountries = () => {
    if (filteredResults.length < 11 && !checkIfEmpty && !oneCountry) {
      filteredResults = filteredResults.map((c) => {
        c.show = false;
        return c;
      });
      btn = filteredResults;
      setbtn(btn);
      setShow(false);
    }
  };

  const handleClick = (event) => {
    //our target
    tenCountries();
    const target = event.target.previousElementSibling.textContent;
    //find the name
    let desired = btn.filter((c) => {
      if (c.name.trim() === target.trim()) {
        c.show = true;
      }
      return c.name.trim() === target.trim();
    });
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
                  <button onClick={handleClick}>show more</button>
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
