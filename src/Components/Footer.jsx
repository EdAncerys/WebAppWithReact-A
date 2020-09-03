import React from 'react';
import colors from '../config/colors';

const year = new Date();

export default function Footer({ props }) {
  return (
    <div style={styles.container}>
      <div>&copy; Copyright {year.getFullYear()} Howden Joinery Ltd</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'center',
    paddingLeft: 20,
    bottom: 0,
    width: '90vw',
    minHeight: 100,
    color: colors.medium,
    borderTop: `1px solid ${colors.light}`,
    backgroundColor: 'red',
  },
};
