import React, { useEffect, useState } from 'react';
import styles from "./signInPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/authSlice';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  useEffect(() => {

    if (isAuthenticated) {
      navigate('/profile');
    } else {
      // alert('not valid')
    }
  }, [isAuthenticated, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
  };

  return (
    <div className={styles.container}>
      <h1>Signin to your <br /> PopX account</h1>
      <p className={styles.details}>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
      <form onSubmit={handleSignIn} className={styles.form}>
        <div className={'inputDiv'}>
          <label className="label">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="input"
            required
          />
        </div>
        <div className={'inputDiv'}>
          <label className="label">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            className="input"
            required
          />
        </div>
        <button type="submit" className='blueBtn'>Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
