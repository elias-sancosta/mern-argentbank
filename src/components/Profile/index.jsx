// Importation des modules nécessaires
import './profile.css'; // Importe la feuille de style CSS associée au composant
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Composant pour la page de profil utilisateur.
 * Affiche les informations du profil utilisateur, y compris les comptes associés.
 * @returns {JSX.Element} Élément JSX représentant le composant de profil utilisateur.
 */
function Profile() {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <main className="main bg-dark-profile">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userInfo.firstName} {userInfo.lastName}!
          </h1>
          <button className="edit-button">
            <Link to="/update">Edit Name</Link>
          </button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        {/* Section pour le compte Argent Bank Checking */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        {/* Section pour le compte Argent Bank Savings */}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        {/* Section pour la carte de crédit Argent Bank */}
        <section className="account last-account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
    </>
  );
}
export default Profile;
