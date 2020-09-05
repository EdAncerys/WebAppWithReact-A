import React from 'react';
import colors from '../config/colors';

const year = new Date();

export default function Footer({ props }) {
  return (
    <div style={styles.container}>
      <div>&copy; Copyright {year.getFullYear()} Personal Trainer Ltd</div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    alignItems: 'center',
    paddingTop: 20,
    bottom: 0,
    width: '90vw',
    minHeight: 50,
    color: colors.medium,
    borderTop: `1px solid ${colors.medium}`,
  },
};
