// Importation des modules nécessaires
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

// Configuration de la requête de base avec l'URL de base vide
const baseQuery = fetchBaseQuery({ baseUrl: '' });

// Crée une API en utilisant createApi de Redux Toolkit
export const apiSlice = createApi({
  baseQuery, // Utilise la requête de base configurée
  tagTypes: ['User'], // Types de balises pour le suivi des requêtes
  endpoints: (builder) => ({}), // Endpoints API (actuellement vide)
});
