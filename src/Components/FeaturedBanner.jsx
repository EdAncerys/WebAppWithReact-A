import React from 'react';
import Running from '../images/QVD3Xht9txA.jpg';

export default function FeaturedBanner({ props }) {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={Running} />
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
};
