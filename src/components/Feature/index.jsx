// Importation des modules nécessaires
import React from 'react';
import './feature.css';

/**
 * Composant pour afficher une caractéristique ou un avantage.
 * @param {Object} props - Propriétés du composant.
 * @param {string} props.icon - URL de l'icône à afficher.
 * @param {string} props.title - Titre de la caractéristique.
 * @param {string} props.description - Description de la caractéristique.
 * @returns {JSX.Element} Élément JSX représentant une caractéristique ou un avantage.
 */
function Feature({ icon, title, description }) {
  return (
    <div className="feature-item">
      {/* Affichage de l'icône associée à la caractéristique */}
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />

      {/* Titre de la caractéristique */}
      <h3 className="feature-item-title">{title}</h3>

      {/* Description de la caractéristique */}
      <p>{description}</p>
    </div>
  );
}

export default Feature;
