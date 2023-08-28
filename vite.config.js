import { defineConfig } from 'vite'; // Importe la fonction defineConfig de Vite
import react from '@vitejs/plugin-react'; // Importe le plugin Vite pour React

/**
 * Configuration de Vite pour le projet.
 * Définit les plugins à utiliser et les paramètres du serveur de développement.
 * @returns {import('vite').UserConfig} Configuration de Vite.
 */
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Utilise le plugin Vite pour React
  server: {
    port: 3000, // Définit le port du serveur de développement
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Définit l'URL de base du proxy
        changeOrigin: true, // Modifie l'origine de la requête pour le proxy
      },
    },
  },
});
