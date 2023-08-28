// Importation des modules nécessaires
import { createSlice } from '@reduxjs/toolkit';

// État initial de la slice d'authentification
const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
};

// Crée une slice d'authentification en utilisant createSlice de Redux Toolkit
const authSlice = createSlice({
  name: 'auth', // Nom de la slice
  initialState, // État initial de la slice
  reducers: {
    // Reducer pour mettre à jour les informations d'authentification
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      // Stocke les informations d'utilisateur dans le stockage local (localStorage)
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // Reducer pour gérer la déconnexion
    logout: (state, action) => {
      state.userInfo = null;
      // Supprime les informations d'utilisateur du stockage local (localStorage)
      localStorage.removeItem('userInfo');
    },
  },
});

// Exporte les actions générées par createSlice
export const { setCredentials, logout } = authSlice.actions;

// Exporte le reducer généré par createSlice
export default authSlice.reducer;
