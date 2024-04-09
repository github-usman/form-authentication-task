import { useDispatch, useSelector } from 'react-redux';
import { updateAccount } from '../../redux/authSlice';
import { MdCancel } from 'react-icons/md';
import React, { useState } from 'react';
import styles from './updateProfile.module.css';
import toast from 'react-hot-toast';

const UpdateProfile = ({ setIsOpen }) => {
  const userData = useSelector(state => state.auth.user);
  const [formData, setFormData] = useState({
    fullName: userData?.fullName,
    phoneNumber: userData?.phoneNumber,
    email: userData?.email,
    password: userData?.password,
    companyName: userData?.companyName
  });
  const dispatch = useDispatch();

  // update the user data
  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateAccount(formData));
    toast.success('Profile Updated successfully!');
    setIsOpen(false);
  };

  // clsoe modal without any changes
  const handleClose = () => {
    setIsOpen(false);
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
      <form onSubmit={handleUpdate} className={styles.InputContainer}>
        <div className={styles.cancelBtn} onClick={handleClose}>
          <MdCancel size={35} />
        </div>
        <div>
          <div className={styles.inputs}>
            <div className={'inputDiv'}>
              <label className="label" htmlFor="fullName">
                Full Name*
              </label>
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
              <label className="label" htmlFor="phoneNumber">
                Phone number*
              </label>
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
              <label className="label" htmlFor="email">
                Email address*
              </label>
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
              <label className="label" htmlFor="password">
                Password*
              </label>
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
              <label className="label" htmlFor="companyName">
                Company name
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                className={'input'}
              />
            </div>
          </div>
        </div>
        <div className={styles.btnContiner}>
          <button
            type="submit"
            className={
              formData?.password?.length > 0 &&
              formData?.email?.length > 0 &&
              formData?.fullName?.length &&
              formData?.phoneNumber.length > 0
                ? 'blueBtn'
                : 'disableBtn'
            }
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
