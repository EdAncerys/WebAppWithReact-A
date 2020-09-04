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
    display: 'grid',
    position: 'sticky',
    zIndex: 1,
    top: 0,
    gridTemplateColumns: '3fr 2fr',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    textAlign: 'center',
  },
  leftContainer: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 28,
    color: colors.white,
    textTransform: 'uppercase',
    cursor: 'pointer',
  },
  rightContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};
