import Header from '../../components/Header'; // Importe le composant d'en-tête
import Footer from '../../components/Footer'; // Importe le composant de pied de page
import UpdateProfile from '../../components/UpdateProfile'; // Importe le composant de mise à jour de profil

/**
 * Écran de mise à jour du profil utilisateur.
 * Affiche le composant de mise à jour de profil utilisateur dans une mise en page comprenant un en-tête et un pied de page.
 * @returns {JSX.Element} Élément JSX représentant l'écran de mise à jour du profil utilisateur.
 */
const UpdateScreen = () => {
  return (
    <>
      <Header /> {/* Affiche le composant d'en-tête */}
      <UpdateProfile /> {/* Affiche le composant de mise à jour de profil */}
      <Footer /> {/* Affiche le composant de pied de page */}
    </>
  );
};

export default UpdateScreen;
