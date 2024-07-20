// /** @jsxImportSource @emotion/react */

import React, { useState, useEffect } from "react";

import {theme} from "./helpers/theme";

const API_URL_ALL = "https://restcountries.com/v3.1/all";

const App = () => {
  const [countries, setCountries] = useState([]);

  const fetchApi = async () => {
      const response = await fetch(API_URL_ALL);
      const data = await response.json();

      setCountries(data);
  };

  useEffect(() => {
    fetchApi()
  }, [])

  console.log(countries);
  const data = countries.map(el => {
    return {
      name: el.name.common,
      capital: el.capital,
      population: el.population,
      flagUrl: el.flags.png,
    }
  });

  console.log(data);

  return (
    <div style={styles.root}>
      <h1 style={styles.header}></h1>
      <div style={styles.grid}>
        {data.map(el => (
          <div key={el.name} style={styles.countryBox(el.flagUrl)}>
            <div style={styles.text}>
              <div>{el.name}</div>
              <div>{el.capital}</div>
              <div>{el.population}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: '100vh',
    // display: 'flex',
    backgroundImage: `url("${"https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/118597283_3275426359173530_6728826168838114822_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=300f58&_nc_ohc=1YmH9IbacLQAX9c7qsn&_nc_ht=scontent-waw1-1.xx&oh=00_AfAzHdtni3MQ8Tdlbs2SPu75EVp2x1l1uN88Ia4EgkOf1g&oe=656E2CF7"}")`,

    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  header: {
    justifyContent: 'center',
    fontSize: 34,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '320px 320px 320px',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '95vh',
    overflow: 'scroll',
  },
  countryBox: imageSrc => ({
    width: 300,
    height: 220,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius * 2,
    margin: theme.gutterMedium,
    backgroundImage: `url("${imageSrc}")`,
    opacity: 0.8,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
  }),
  text: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

};

export default App;