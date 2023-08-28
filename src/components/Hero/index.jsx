// Importation des modules nécessaires
import './hero.css';

/**
 * Composant pour la section d'introduction en haut de la page (héros).
 * Affiche des informations promotionnelles sur les comptes d'épargne.
 * @returns {JSX.Element} Élément JSX représentant la section d'introduction (héros).
 */
function Hero() {
  return (
    <div className="hero">
      {/* Contenu de la section d'introduction */}
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        {/* Sous-titres affichant les avantages des comptes d'épargne */}
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        {/* Texte d'appel à l'action pour ouvrir un compte d'épargne */}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
}

export default Hero;
