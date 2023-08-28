import { apiSlice } from './apiSlice'; // Importe la slice d'API créée précédemment
const USER_URL = '/api/v1/user'; // URL de base pour les endpoints de l'utilisateur

// Injecte des endpoints personnalisés dans la slice d'API existante
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint de connexion utilisateur
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`, // URL spécifique pour la requête de connexion
        method: 'POST',
        body: data, // Corps de la requête (données de connexion)
      }),
    }),
    // Endpoint de déconnexion utilisateur
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`, // URL spécifique pour la requête de déconnexion
        method: 'POST',
      }),
    }),
    // Endpoint pour obtenir les détails de l'utilisateur
    getUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`, // URL spécifique pour la requête de profil utilisateur
        method: 'GET',
        body: data, // Corps de la requête (peut être utilisé pour les paramètres)
      }),
    }),
    // Endpoint de mise à jour des détails de l'utilisateur
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`, // URL spécifique pour la mise à jour du profil utilisateur
        method: 'PUT',
        body: data, // Corps de la requête (données de mise à jour)
      }),
    }),
    // Endpoint d'inscription utilisateur
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`, // URL spécifique pour la requête d'inscription
        method: 'POST',
        body: data, // Corps de la requête (données d'inscription)
      }),
    }),
  }),
});

// Extrait les hooks de mutation générés pour chaque endpoint
export const {
  useLoginMutation,
  useLogoutMutation,
  useGetUserMutation,
  useUpdateUserMutation,
  useRegisterMutation,
} = userApiSlice;
