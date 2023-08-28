// Importation des modules nécessaires
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import UpdateScreen from './screens/UpdateScreen';
import PrivateRoute from './routes/PrivateRoute.jsx';
import store from './store';
import { Provider } from 'react-redux';

// Création du routeur
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/update" element={<UpdateScreen />} />
      </Route>
    </Route>
  )
);

// Rendu de l'application dans l'élément root du DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilisation de Redux pour la gestion de l'état global
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
