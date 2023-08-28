// Importation des modules nécessaires
import Footer from '../../components/Footer'; // Importe le composant de pied de page
import Profile from '../../components/Profile'; // Importe le composant de profil utilisateur
import Header from '../../components/Header'; // Importe le composant d'en-tête

/**
 * Écran de profil utilisateur.
 * Affiche le composant de profil utilisateur dans une mise en page comprenant un en-tête et un pied de page.
 * @returns {JSX.Element} Élément JSX représentant l'écran de profil utilisateur.
 */
const ProfileScreen = () => {
  return (
    <>
      <Header /> {/* Affiche le composant d'en-tête */}
      <Profile /> {/* Affiche le composant de profil utilisateur */}
      <Footer /> {/* Affiche le composant de pied de page */}
    </>
  );
};

export default ProfileScreen;
