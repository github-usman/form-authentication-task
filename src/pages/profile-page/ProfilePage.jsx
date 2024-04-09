import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profilePage.module.css';
import user_profile from '../../assets/images/user_1x.png';
import { ReactComponent as CameraIcon } from '../../assets/icons/camera.svg';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/authSlice';
import UpdateProfile from '../../components/update-profile/UpdateProfile';

function ProfilePage() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const userData = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  const handleLogout = () => {
    dispatch(signOut({}));
    navigate('/');
  };

  // open modal
  const handleUpdate = () => {
    setIsOpen(true);
  };

  return !isOpen ? (
    <>
      <div className={styles.container}>
        <h3 className={styles.titleHeading}>Account Settings</h3>
        <div className={styles.subContainer}>
          <div className={styles.photoName}>
            <div className={styles.userImage}>
              <img src={user_profile} alt="user-profile" />
              <CameraIcon className={styles.icon} width={21} height={23} />
            </div>
            <div className={styles.userName}>
              <p>{userData?.fullName}</p>
              <p>{userData?.email}</p>
            </div>
          </div>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        {/* <hr /> */}
        <div className={styles.userAllInfo}>
          {userData ? (
            <>
              <p>User Name : {userData?.fullName}</p>
              <p>Phone Number : {userData?.phoneNumber}</p>
              <p>Email : {userData?.email}</p>
              <p>Company Name : {userData?.companyName}</p>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        <div className={styles.btnContainer}>
          <button type="submit" className="blackBtn" onClick={handleUpdate}>
            Update Your Profile
          </button>

          <button type="submit" className="blueBtn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      {/* MODAL */}
      <UpdateProfile setIsOpen={setIsOpen} />
    </>
  );
}

export default ProfilePage;
