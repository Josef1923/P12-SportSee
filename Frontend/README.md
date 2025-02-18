Projet 12 - SportSee (OpenClassrooms)

**Utilisation des données API ou locales**

L'application peut utiliser des données locales (mockées) ou les récupérer via une API.

**Comment basculer entre API et données locales ?**

Dans le fichier preparedUserDatas.jsx (Chemin : src/datas/preparedUserDatas.jsx), il existe une variable "isMockEnabled" (ligne 11); qui contrôle la source des données.

Modifier cette ligne :

const isMockEnabled = true; // false = API, true = données locales

false → L'application récupère les données depuis l'API.

true → L'application utilise les données locales mockées.