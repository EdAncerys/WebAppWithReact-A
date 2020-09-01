import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';

export default function App({ props }) {
  return (
    <div style={styles.container}>
      <NavBar />
      <div>Hello World</div>
    </div>
  );
}

const styles = {
  container: {},
};
