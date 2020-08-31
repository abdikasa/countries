import React from "react";

const Countries = ({ filteredResults }) => {
  return (
    <div>
      {filteredResults.map((country) => {
        return <li key={country.numericCode}>{country.name}</li>;
      })}
    </div>
  );
};

export default Countries;
