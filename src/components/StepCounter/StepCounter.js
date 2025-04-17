import React from 'react';

const StepCounter = ({ color = '#000', text }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.greeting} style={{ color }}>👋 Welcome!</h2>
    <p className={styles.message} style={{ color }}>
      {text || "Let's start tracking your steps!"}
    </p>
  </div>
);

export default StepCounter;
