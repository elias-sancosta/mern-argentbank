import './updateProfile.css'; // Importe la feuille de style CSS associée au composant
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useUpdateUserMutation } from '../../slices/usersApiSlice'; // Importe le hook de mutation de l'API utilisateur
import { setCredentials } from '../../slices/authSlice'; // Importe l'action de mise à jour des informations d'authentification
import { useState, useEffect } from 'react';

/**
 * Composant pour la mise à jour du profil utilisateur.
 * Permet à l'utilisateur de mettre à jour son prénom et son nom de famille.
 * @returns {JSX.Element} Élément JSX représentant le composant de mise à jour du profil utilisateur.
 */
function Profile() {
  // Initialise les variables d'états
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch(); // Initialise le gestionnaire de dispatch Redux
  const navigate = useNavigate(); // Initialise le navigateur React Router

  const [updateProfile] = useUpdateUserMutation(); // Utilise le hook de mutation de l'API pour l'actualisation du profil utilisateur

  const { userInfo } = useSelector((state) => state.auth); // Sélectionne les informations d'utilisateur depuis le store Redux

  // Remplit les champs du formulaire avec les données actuelles de l'utilisateur lors de son chargement
  useEffect(() => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
  }, [userInfo.firstName, userInfo.lastName]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      // Met à jour le profil utilisateur avec les nouvelles données
      const res = await updateProfile({
        _id: userInfo._id,
        firstName,
        lastName,
      }).unwrap();
      dispatch(setCredentials({ ...res }));
      toast.success('Profile updated successfully');
      navigate('/profile');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <main className="main bg-dark-profile">
        <div className="header">
          <h1>Welcome back</h1>
          <form className="update-form">
            <div className="input-fields">
              {/* Champ pour le prénom */}
              <div className="input-wrapper-update">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              {/* Champ pour le nom de famille */}
              <div className="input-wrapper-update">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="buttons-wrapper">
              {/* Bouton pour enregistrer les modifications */}
              <button onClick={submitHandler} className="edit-button">
                Save
              </button>
              {/* Bouton pour annuler et retourner au profil */}
              <button className="edit-button">
                <Link to="/profile">Cancel</Link>
              </button>
            </div>
          </form>
        </div>
        <h2 className="sr-only">Accounts</h2>
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
        <section className="account last-account-2">
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
