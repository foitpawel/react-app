// /** @jsxImportSource @emotion/react */

import React, {useState} from "react";

import Country from "./Country";

import {fetchApi} from "../helpers/common"

const API_URL_ALL = "https://restcountries.com/v3.1/all";

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState();

  (() => fetchApi(API_URL_ALL).then(data => setCountries(data)))();

  const data = countries.map(el => {
    return {
      name: el.name.common,
      capital: el.capital,
      population: 
        (Math.abs(Number(el.population)) >= 1.0e+6
          ? Math.round(Math.abs(Number(el.population)) / 1.0e+6 ) + " M"
          : Math.abs(Number(el.population)) >= 1.0e+3
            ? Math.round(Math.abs(Number(el.population)) / 1.0e+3 ) + " K"
            : Math.abs(Number(el.population))
        ),
      flagUrl: el.flags.png,
    }
  });

  const filterFunction = (data, filter) => {
    if(!filter) return data;
    return data.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const handleChangeFilter = evt => {
    setFilter(evt.target.value);
    filterFunction();
  }

  return (
    <div style={styles.root}>
      <input 
      onChange={handleChangeFilter}
      style={styles.input}
      placeholder="Country name"
    />
    <div style={styles.grid}>
      {filterFunction(data, filter).map(el => {
        return (
          <Country 
            key={el.name}
            data={el}
          />
        )
      })}
    </div>
  </div>
  );
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    margin : 24,
    width: 300,
    padding: 8,
    border: 'none',
    borderRadius: 12,
    opacity: 0.5,
    boxShadow: '0 0 200px rgba(0,0,0,0.1) inset',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '320px 320px 320px',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '70vh',
    overflow: 'scroll',
    overflowX: 'hidden',
  },
};

export default CountriesList;
