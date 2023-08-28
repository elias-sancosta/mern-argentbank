// Importation des modules nécessaires
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import './header.css';
import Logo from '../../assets/img/logo.png';

/**
 * Composant pour l'en-tête de navigation.
 * Affiche le logo, les liens de navigation et gère la déconnexion.
 * @returns {JSX.Element} Élément JSX représentant l'en-tête de navigation.
 */
function Header() {
  // Obtient les informations d'utilisateur depuis l'état global
  const { userInfo } = useSelector((state) => state.auth);

  // Obtient la fonction dispatch de Redux pour déclencher des actions
  const dispatch = useDispatch();

  // Obtient la fonction navigate pour gérer la navigation
  const navigate = useNavigate();

  // Utilise la mutation de déconnexion du backend
  const [logoutApiCall] = useLogoutMutation();

  // Gère la déconnexion de l'utilisateur
  const logoutHandler = async () => {
    try {
      // Appelle l'API de déconnexion
      await logoutApiCall().unwrap();

      // Dispatche l'action de déconnexion pour vider les informations d'utilisateur
      dispatch(logout());

      // Redirige vers la page de connexion
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="main-nav">
      {/* Lien du logo de l'application */}
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {/* Affiche les liens de navigation en fonction de l'état de connexion */}
        {userInfo ? (
          <div className="user-info">
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>
              {userInfo.firstName}
            </Link>
            {/* Gère la déconnexion lorsque le lien "Sign Out" est cliqué */}
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
          // Affiche le lien de connexion si l'utilisateur n'est pas connecté
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
