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
        Then, you just have to import the component and place it wherever.
        Remember to pass in the props the dark and light color (hex, rgb, rgba)
        of your choice for it to render properly and for the toggle theme
        function to work.
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
