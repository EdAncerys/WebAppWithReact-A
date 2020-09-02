import React from 'react';
import Running from '../images/QVD3Xht9txA.jpg';
import colors from '../config/colors';

export default function FeaturedBanner({ props }) {
  return (
    <div style={styles.container}>
      <img style={styles.img} alt="running" src={Running} />
      <div style={styles.contact}>
        Expert In Graphics <br />
        Design &Development
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: -100,
  },
  img: {
    width: '100vw',
  },
  contact: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    marginTop: 100,
    marginRight: 100,
    width: 300,
    height: 300,
    borderRadius: '40% 10% 40% 10%',
    border: '3px solid black',
    transform: 'rotate(20deg)',
    color: colors.white,
    fontSize: 28,
    backgroundColor: colors.black,
  },
};
