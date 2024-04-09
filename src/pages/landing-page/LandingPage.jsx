import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css';
const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Our App</h1>
      <Link to="/signup">
        <button className="btn btn-primary">Create Account</button>
      </Link>
      <Link to="/signin">
        <button className="btn btn-secondary">Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;
