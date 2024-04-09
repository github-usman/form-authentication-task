import React from 'react';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import SignInPage from './pages/sign-in-page/SignInPage';
import SignUpPage from './pages/sing-up-page/SignUpPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import './styles/global.css';
import { useSelector } from 'react-redux';

const App = () => {
  // HOC
  const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<SignInPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />

        {/* protected routes */}
        <Route
          exact
          path="/profile"
          element={<ProtectedRoute element={<ProfilePage />} />}
        />
      </Routes>
      <Toaster position="top-center" />
    </Router>
  );
};

export default App;
