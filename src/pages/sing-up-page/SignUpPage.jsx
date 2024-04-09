import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/authSlice';
import React, { useState } from 'react';
import styles from './signUpPage.module.css';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSignUp = e => {
    e.preventDefault();
    dispatch(signUp({ email, password, companyName, fullName, phoneNumber }));
    navigate('/login');
  };

  return (
    <div>
      <form onSubmit={handleSignUp} className={styles.container}>
        <div>
          <h1>
            Create your <br /> PopX account
          </h1>
          <div className={styles.inputs}>
            <div className={'inputDiv'}>
              <label className="label">Full Name*</label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label">Phone number*</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label">Email address*</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label">Password*</label>
              <input
                type="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter new password"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label">Company name</label>
              <input
                type="text"
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
                className={'input'}
              />
            </div>
            <div className={styles.agencyLebel}>
              <label>Are you an Agency?*</label>
              <div className={styles.radio}>
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  value="yes"
                  defaultChecked
                />
                <label htmlFor="yes">Yes</label>
                <input type="radio" id="no" name="agency" value="no" />
                <label htmlFor="no">No</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={'blueBtn'}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
