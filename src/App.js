import React from 'react';
import Hero from './components/Hero';
import HowToUse from './components/HowToUse';
import styles from './components/Global.module.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Prng } from '@ivangarcia/poronga';

function App() {
  const dataArr = [
    {
      label: "Hello",
      type: "text",
      placeholder: "World",
      name: "hello"
    },
    {
      label: "Hello again",
      type: "text",
      placeholder: "Hello again World",
      name: "helloAgain"
    },
  ];

  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Hero />
        <Prng formData={dataArr} isDark={true} ctaAspect="light" ctaSize="medium"  />
        <HowToUse />
      </div>
      <Footer />
    </>
  );
}

export default App;
