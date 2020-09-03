import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FeaturedBanner from './Components/FeaturedBanner';
import Footer from './Components/Footer';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <FeaturedBanner />

      <div style={styles.wrapper}>
        <Footer />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
  },
  wrapper: {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
