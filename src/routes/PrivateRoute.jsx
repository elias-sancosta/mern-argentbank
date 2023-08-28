import { Navigate, Outlet } from 'react-router-dom'; // Importe les composants Navigate et Outlet de react-router-dom
import { useSelector } from 'react-redux'; // Importe le hook useSelector de react-redux

/**
 * Composant de route privée.
 * Vérifie si l'utilisateur est authentifié en utilisant le state de Redux.
 * Redirige vers l'écran de connexion si l'utilisateur n'est pas authentifié.
 * @returns {JSX.Element} Élément JSX représentant la route privée.
 */
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth); // Obtient les informations sur l'utilisateur depuis le state Redux

  // Si l'utilisateur est authentifié, affiche les composants enfants (Outlet)
  // Sinon, redirige vers l'écran de connexion en remplaçant l'historique de navigation
  return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};
export default PrivateRoute;
