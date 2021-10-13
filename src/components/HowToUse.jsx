import React from 'react';
import image from './show.png';
import sample from './sample.png';
import hook from './hook.png';
import styles from './Global.module.css';

const HowToUse = () => {
  return (
    <section>
      <h2>How to use?</h2>
      <p>
        It is actually very simple to use, first of all you have to install it
        running the next command: <code>npm i @ivangarcia/poronga</code>
      </p>
      <h3 style={{margin: '20px 0'}}>
        Props
      </h3>
      <p>The Prng component takes a few props that allow customization.</p>
      <ul style={{margin: '20px 0'}}>
        <li style={{marginBottom: '10px'}}>
          <strong>formData:</strong> array of objects that will be converted to input fields.
          The structure must be:
        </li>
        <div>
          <img style={{maxWidth: '500px'}} src={sample} alt="Sample code snippet." />
        </div>
        <li style={{marginBottom: '10px'}}>
          <strong>isDark:</strong> boolean to tell the component to display in dark or light mode. 
        </li>
        <li style={{marginBottom: '10px'}}>
          <strong>ctaAspect:</strong> a string that can be <code>large, medium or small</code>. It determines the button width, padding, and border radius.
        </li>
        <li style={{marginBottom: '10px'}}>
          <strong>ctaText:</strong> the text that's inside the button. Defaults to <code>Send</code>.
        </li>
        <li style={{marginBottom: '10px'}}>
          <strong>border:</strong> boolean to choose to render the form with a border or not.
        </li>
        <li style={{marginBottom: '10px'}}>
          <strong>fullWidth:</strong> <code>true</code> if you want the inputs to display one under another, false for 50 / 50 widths.
        </li>
        <li style={{marginBottom: '10px'}}>
          <strong>submitAction:</strong> a callback to be executed when the submit button is clicked.
        </li>
      </ul>
      <h3 style={{margin: '20px 0'}}>
        useUserInput hook
      </h3>
      <p>
        This is a custom hook, that when you call it, it returns the values that the user wrote on the input fields.
      </p>
      <div>
        <img style={{maxWidth: '500px'}} src={hook} alt="Custom hook." />
      </div>
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
