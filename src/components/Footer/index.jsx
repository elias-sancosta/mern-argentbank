// Importation des modules nécessaires
import React from 'react';
import './footer.css';

/**
 * Composant pour le pied de page de l'application.
 * Affiche le message de copyright.
 * @returns {JSX.Element} Élément JSX représentant le pied de page.
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Message de copyright */}
      <p className="footer-text">Copyright 2023 Argent Bank</p>
    </footer>
  );
}

export default Footer;
