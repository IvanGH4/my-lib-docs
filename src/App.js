import React from 'react';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import styles from './components/Global.module.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Prng } from '@ivangarcia/poronga';

function App() {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Hero />
        <Prng dark="#333333" light="#ffffff" />
        <HowToUse />
      </div>
      <Footer />
    </>
  );
}

export default App;
