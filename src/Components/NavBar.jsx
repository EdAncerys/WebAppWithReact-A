import React from 'react';
import colors from '../config/colors';
import Button from './Button';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div>
        <Button title="Home" />
      </div>
      <div>NavBar</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: 50,
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
};
