// Importation des modules nécessaires
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Composant racine de l'application.
 * Il rend le conteneur de notifications Toastify et l'élément Outlet pour le routage imbriqué.
 * @returns {JSX.Element} Élément JSX représentant le composant racine.
 */
const App = () => {
  return (
    <>
      {/* Conteneur de notifications Toastify pour afficher les messages d'erreur, succès, etc. */}
      <ToastContainer />

      {/* Outlet : zone où les composants spécifiques aux routes seront rendus */}
      <Outlet />
    </>
  );
};

export default App;
