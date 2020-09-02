import React from 'react';
import colors from '../config/colors';
import Button from './Button';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>Portfolio</div>
      <div style={styles.rightContainer}>
        <Button title="Home" />
        <Button title="Work" />
        <Button title="Hire Me" />
        <Button title="Blog" />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '3fr 2fr',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    padding: '10px 5vw',
    textAlign: 'center',
    backgroundColor: colors.primary,
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 28,
    color: colors.white,
    textTransform: 'uppercase',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};
