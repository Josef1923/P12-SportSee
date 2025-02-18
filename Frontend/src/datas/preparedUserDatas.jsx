import { useState, useEffect } from "react";
import userMockedDatas from "./userDatas.json";
import {
    getUser,
    getUserActivity,
    getUserAverageSession,
    getUserPerformance,
} from "../services/api";

//Switch a false pour désactiver le mode mock
const isMockEnabled = true;

// Standardisation des données utilisateur
function standardizedUserDatas(userDatas) {
    return {
        id: userDatas.id,
        userInfos: userDatas.userInfos,
        score: userDatas.todayScore ?? userDatas.score ?? 0, // Normalisation du score
        keyData: userDatas.keyData,
    };
}

// Standardisation des performances utilisateur
function standardizedUserPerformance(performanceData) {
    return performanceData.data.map((item) => ({
        value: item.value,
        kind: performanceData.kind[item.kind] // Remplace le num de kind par le nom
    }));
}

function useUser(userId) {
    const [userDatas, setUserDatas] = useState();
    const [userActivity, setUserActivity] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    const [userPerformances, setUserPerformances] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchUserData() {
            try {
                if (isMockEnabled) {

                    console.log("Données provenant du mock");    
                    //Mode local
                    const data = userMockedDatas;

                    // Récupération des données principales de l'utilisateur
                    const user = data.USER_MAIN_DATA.find(user => user.id === userId);
                    if (user) setUserDatas(standardizedUserDatas(user));

                    // Récupération et formatage des données d'activités
                    const activity = data.USER_ACTIVITY.find(activity => activity.userId === userId);
                    if (activity && Array.isArray(activity.sessions)) {
                        setUserActivity(activity.sessions.map((session, index) => ({
                            ...session,
                            day: index + 1, // Convertir la date en index
                        })));
                    }

                    // Récupération des sessions moyennes
                    const averageSession = data.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
                    setUserAverageSession(averageSession ? averageSession.sessions : []);

                    // Récupération des performances utilisateur
                    const performances = data.USER_PERFORMANCE.find(perf => perf.userId === userId);
                    if (performances) setUserPerformances(standardizedUserPerformance(performances));

                } else {
                    console.log("Données provenant de l'API");
                    //Mode API
                    const user = await getUser(userId);
                    setUserDatas(standardizedUserDatas(user));

                    const activity = await getUserActivity(userId);
                    setUserActivity(activity.sessions.map((session, index) => ({
                        ...session,
                        day: index + 1,
                    })));

                    const averageSession = await getUserAverageSession(userId);
                    setUserAverageSession(averageSession.sessions);

                    const performances = await getUserPerformance(userId);
                    setUserPerformances(standardizedUserPerformance(performances));
                }
            } catch (err) {
                console.error("Erreur lors de la récupération des données :", err);
                setError(err.message);
            }
        }

        fetchUserData();
    }, [userId]);

    return { userDatas, userActivity, userAverageSession, userPerformances, error };
}

export { useUser };
