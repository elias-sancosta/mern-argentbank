import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/AuthSlice'; // Importe le reducer de la AuthSlice
import { apiSlice } from './slices/apiSlice'; // Importe la slice d'API

// Configuration du store Redux
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Utilise le reducer de la slice d'API pour gérer les états de l'API
    auth: authReducer, // Utilise le reducer d'authentification pour gérer l'état de l'authentification
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Ajoute le middleware de la slice d'API
  devTools: true, // Active les outils de développement Redux
});

export default store;
