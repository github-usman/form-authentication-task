import React from 'react';
import styles from './landingPage.module.css';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <div className={styles.btnContainer}>
        <Link to={'/signup'}>
          <button className="blueBtn">Create Account</button>
        </Link>
        <Link to={'/login'}>
          <button className="pinkGreyBtn">Already Registered? Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
