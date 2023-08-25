import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import './header.css';
import Logo from '../../assets/img/logo.png';

function Header() {
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {userInfo ? (
          <div className="user-info">
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userInfo.firstName}
            </Link>
            <Link
              className="main-nav-item"
              onClick={logoutHandler}
              to="/logout"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
