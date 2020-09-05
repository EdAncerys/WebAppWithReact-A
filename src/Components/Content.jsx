import React from 'react';
import imgOne from '../images/d3bYmnZ0ank.jpg';
import imgTwo from '../images/hSB2HmJYaTo.jpg';
import imgThree from '../images/PHIgYUGQPvU.jpg';

import colors from '../config/colors';

export default function Content({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.banner}>
        <div style={styles.text}>Services</div>
      </div>
      <div style={styles.serviceContainer}>
        <div style={styles.box}>
          <img style={styles.img} alt="running" src={imgThree} />
        </div>
        <div style={styles.box}>
          <img style={styles.img} alt="running" src={imgOne} />
        </div>
        <div style={styles.box}>
          <img style={styles.img} alt="running" src={imgTwo} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    gridTemplateRows: '200px auto',
    textAlign: 'center',
  },
  serviceContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 2fr',
    height: '40vh',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 20,
  },
  box: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    margin: 20,
    overflow: 'hidden',
    border: `1px solid ${colors.medium}`,
  },
  img: {
    cursor: 'pointer',
  },
  text: {
    width: 200,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    border: `1px solid ${colors.white}`,
    borderRadius: 20,
    cursor: 'pointer',
  },
  banner: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    height: '100%',
  },
};
