// Importation des modules nécessaires
import React from 'react';
import iconChat from '../../assets/icons/chat.png';
import iconMoney from '../../assets/icons/money.png';
import iconSecurity from '../../assets/icons/security.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Feature from '../../components/Feature';
import Hero from '../../components/Hero';

/**
 * Composant racine de l'application.
 * Rend les composants Header, Hero, Feature, et Footer pour afficher le contenu de l'application.
 * @returns {JSX.Element} Élément JSX représentant le composant racine de l'application.
 */
function App() {
  return (
    <div className="App">
      {/* Affiche la barre de navigation */}
      <Header />

      {/* Affiche la section Hero pour l'introduction */}
      <Hero />

      {/* Section affichant les caractéristiques ou avantages */}
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {/* Composant Feature pour la caractéristique #1 */}
        <Feature
          icon={iconChat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        />
        {/* Composant Feature pour la caractéristique #2 */}
        <Feature
          icon={iconMoney}
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        {/* Composant Feature pour la caractéristique #3 */}
        <Feature
          icon={iconSecurity}
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money is always safe."
        />
      </section>

      {/* Affiche le pied de page */}
      <Footer />
    </div>
  );
}

export default App;
