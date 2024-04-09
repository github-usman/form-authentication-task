import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/authSlice';
import React, { useState } from 'react';
import styles from './signUpPage.module.css';
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', email: '', password: '', companyName: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSignUp = e => {
    e.preventDefault();
    dispatch(signUp(formData));
    navigate('/login');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
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
              <label className="label" htmlFor='fullName'>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label" htmlFor='phoneNumber'>Phone number*</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label" htmlFor='email'>Email address*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label" htmlFor='password'>Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter new password"
                className={'input'}
                required
              />
            </div>
            <div className={'inputDiv'}>
              <label className="label" htmlFor='companyName'>Company name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className={'input'}
              />
            </div>
            <div className={styles.agencyLebel}>
              <label htmlFor='is-agency'>Are you an Agency?*</label>
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
        {/* <button type="submit" className={'blueBtn'}>Sign Up</button> */}
        <button type="submit" className={(formData?.password?.length > 0 && formData?.email?.length > 0 && formData?.fullName?.length && formData?.phoneNumber.length > 0) ? 'blueBtn' : 'disableBtn'}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
