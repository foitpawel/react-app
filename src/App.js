// /** @jsxImportSource @emotion/react */

import React from "react";

import CountriesList from "./components/CountriesList";

const App = () => (
  <div style={styles.root}>
    <h1 style={styles.header}>Countries</h1>
    <h2 style={styles.header2}>Type to find your country</h2>
    <CountriesList />
  </div>
);

const styles = {
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url("${"https://blog.hootsuite.com/wp-content/uploads/2021/07/free-stock-photos-12.jpeg"}")`,
    // display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.95,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    fontSize: 36,
  },
  header2: {
    justifyContent: 'center',
    fontSize: 26,
  },
};

export default App;
