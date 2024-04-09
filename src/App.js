import React, { Suspense } from 'react';
import './styles/global.css';
import { Toaster } from 'react-hot-toast';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './components/loading/Loading';

// Lazy load components
const LazyLandingPage = React.lazy(
  () => import('./pages/landing-page/LandingPage')
);
const LazySignInPage = React.lazy(
  () => import('./pages/sign-in-page/SignInPage')
);
const LazySignUpPage = React.lazy(
  () => import('./pages/sing-up-page/SignUpPage')
);
const LazyProfilePage = React.lazy(
  () => import('./pages/profile-page/ProfilePage')
);

const App = () => {
  // HOC
  const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route exact path="/" element={<LazyLandingPage />} />
          <Route exact path="/login" element={<LazySignInPage />} />
          <Route exact path="/signup" element={<LazySignUpPage />} />

          {/* protected routes */}
          <Route
            exact
            path="/profile"
            element={<ProtectedRoute element={<LazyProfilePage />} />}
          />
        </Routes>
        <Toaster position="top-center" />
      </Suspense>
    </Router>
  );
};

export default App;
