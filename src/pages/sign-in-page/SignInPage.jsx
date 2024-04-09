import React, { useEffect, useState } from 'react';
import styles from "./signInPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../redux/authSlice';
import toast from 'react-hot-toast';

const SignInPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      setFormData({ email: '', password: '' });
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      dispatch(signIn(formData));

    } catch (error) {
      toast.success('Sign in Error Internal server Error')
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className={styles.container}>
      <h1>Signin to your <br /> PopX account</h1>
      <p className={styles.details}>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
      <form onSubmit={handleSignIn} className={styles.form}>
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
        <button type="submit" className={(formData?.password?.length>0 && formData?.email?.length>0) ? 'blueBtn':'disableBtn' }>Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
