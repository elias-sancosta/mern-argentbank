import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './errorScreen.css';

export default function ErrorScreen() {
  return (
    <>
      <Header />
      <div className="main bg-dark error">
        <h1>Oups!</h1>
        <h2> La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="">
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}
