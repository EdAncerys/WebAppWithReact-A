import React from 'react';

export default function NavBar({ props }) {
  return (
    <div style={styles.container}>
      <div>NavBar</div>
      <div>NavBar</div>
      <div>NavBar</div>
      <div>NavBar</div>
      <div>NavBar</div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    minHeight: 50,
    textAlign: 'center',
    backgroundColor: 'blue',
  },
};
