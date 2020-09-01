import React from "react";

const Countries = ({ filteredResults, checkInput }) => {
  const checkIfEmpty = checkInput.length === 0 ? true : false;
  return (
    <div>
      {!checkIfEmpty
        ? filteredResults.map((country) => {
            return <li key={country.numericCode}>{country.name}</li>;
          })
        : ""}
    </div>
  );
};

export default Countries;
