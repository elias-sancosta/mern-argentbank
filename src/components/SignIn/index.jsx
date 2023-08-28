import './signIn.css'; // Importe la feuille de style CSS associée au composant
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../../slices/usersApiSlice'; // Importe le hook de mutation de l'API utilisateur
import { setCredentials } from '../../slices/authSlice'; // Importe l'action de mise à jour des informations d'authentification
import { toast } from 'react-toastify'; // Importe la bibliothèque de notifications

/**
 * Composant pour la page de connexion.
 * Permet aux utilisateurs de se connecter en utilisant leur adresse e-mail et leur mot de passe.
 * @returns {JSX.Element} Élément JSX représentant le composant de connexion.
 */
function SignIn() {
  // Initialise les variables d'états
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch(); // Initialise le gestionnaire de dispatch Redux
  const navigate = useNavigate(); // Initialise le navigateur React Router

  const [login] = useLoginMutation(); // Utilise le hook de mutation de l'API pour la connexion

  const { userInfo } = useSelector((state) => state.auth); // Sélectionne les informations d'utilisateur depuis le store Redux

  // Hook pour rediriger vers le profil si l'utilisateur est déjà connecté
  useEffect(() => {
    if (userInfo) {
      navigate('/profile');
    }
  }, [navigate, userInfo]);

  // Gère la soumission du formulaire de connexion
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap(); // Appelle la mutation de connexion
      dispatch(setCredentials({ ...res })); // Met à jour les informations d'authentification dans le store
      navigate('/profile'); // Redirige vers la page de profil
    } catch (err) {
      toast.error(err?.data?.message || err.error); // Affiche une notification d'erreur en cas d'échec de connexion
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}
export default SignIn;
