import React from 'react';
import colors from '../config/colors';
import Button from './Button';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <Button title="Home" />
        <Button title="Contact" />
        <Button title="Profile" />
      </div>
      <div style={styles.rightContainer}>
        <Button title="Login" />
        <Button title="Logout" />
      </div>
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
    padding: 20,
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};
