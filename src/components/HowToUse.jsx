import React from 'react';
import image from './ex.png';
import styles from './Global.module.css';

const HowToUse = () => {
  return (
    <section>
      <h3>How to use?</h3>
      <p>
        It is actually very simple to use, first of all you have to install it
        running the next command: <code>npm i @ivangarcia/poronga</code>
      </p>
      <p>
        Then, you just have to import the component and place it wherever you
        want. Remember to pass it the dark and light color (hex or rgba) of your
        choose for it to render properly and the toggle theme function works.
      </p>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={image}
          alt="How to use poronga library"
        />
      </div>
    </section>
  );
};

export default HowToUse;
