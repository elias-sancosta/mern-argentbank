import Header from '../../components/Header'; // Importe le composant d'en-tête
import Footer from '../../components/Footer'; // Importe le composant de pied de page
import SignIn from '../../components/SignIn'; // Importe le composant de connexion

/**
 * Écran de connexion.
 * Affiche le composant de connexion dans une mise en page comprenant un en-tête et un pied de page.
 * @returns {JSX.Element} Élément JSX représentant l'écran de connexion.
 */
const LoginScreen = () => {
  return (
    <>
      <Header /> {/* Affiche le composant d'en-tête */}
      <SignIn /> {/* Affiche le composant de connexion */}
      <Footer /> {/* Affiche le composant de pied de page */}
    </>
  );
};

export default LoginScreen;
