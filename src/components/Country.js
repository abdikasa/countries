import React from "react";

const Country = ({ country }) => {
  //case 1
  //If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
  //['Too many matches, specify another filter'] ----> FINISHED

  //case 2 --> More than 1 and less than 11. ----> FINISHED
  //show country names ---> name property

  //case 3 --- only 1 country
  //h1 -> country name
  //p -> capital, population
  //h2 -> languages, ul <li>Languages<li>
  //Languages is found in this array --> [{name}, {name}, {name}]

  return <li key={country.numericCode}>{country.name}</li>;
};

export default Country;
