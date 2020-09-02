import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FeaturedBanner from './Components/FeaturedBanner';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <FeaturedBanner />
    </div>
  );
}

const styles = {
  container: {},
};
