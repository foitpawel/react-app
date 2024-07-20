// /** @jsxImportSource @emotion/react */

import React from "react";

import {theme} from "../helpers/theme";

const Country = ({data}) => (
  <div style={styles.countryBox(data.flagUrl)}>
    <div style={styles.textBox}>
      {Object.values(data).slice(0, 3).map((el, idx) =>
        <div key={idx+el} style={styles.typo}>{el}</div>
      )}
    </div>
  </div>
);

const styles = {
  countryBox: imageSrc => ({
    width: 300,
    height: 220,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius * 2,
    // border: 'solid',
    margin: theme.gutterMedium,
    backgroundImage: `url("${imageSrc}")`,
    opacity: 0.95,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'contain',
    backgroundSize: '100% 100%',
    boxShadow: '0 0 200px rgba(0,0,0,0.9) inset',
    border: 'none',
  }),
  textBox: {
    fontSize: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typo: {
    color: 'fff',
    fontSize: 24,
  }
};

export default Country;
