const BASE_URL = 'http://localhost:3000/user'; // Adresse du backend


// Fonction pour récupérer les données de l'API
const fetchData = async (endpoint) => {
    try {
        const response = await fetch(endpoint); // Essayer de récupérer les données
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();  //
        return data.data; // Retourner les données
    } catch {
        throw new Error("Impossible de récupérer les données."); // Retourner une erreur si il y a un problème
    }
};

// Récupérer les infos utilisateur
export const getUser = (userId) => fetchData(`${BASE_URL}/${userId}`);

// Récupérer l'activité utilisateur
export const getUserActivity = (userId) => fetchData(`${BASE_URL}/${userId}/activity`);

// Récupérer les sessions moyennes utilisateur
export const getUserAverageSession = (userId) => fetchData(`${BASE_URL}/${userId}/average-sessions`);

// Récupérer les performances utilisateur
export const getUserPerformance = (userId) => fetchData(`${BASE_URL}/${userId}/performance`);