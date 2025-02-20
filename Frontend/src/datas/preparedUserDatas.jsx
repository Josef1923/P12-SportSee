import { useState, useEffect } from "react";
import userMockedDatas from "./userDatas.json";
import {
    getUser,
    getUserActivity,
    getUserAverageSession,
    getUserPerformance,
} from "../services/api";

import UserData from "../models/userData";
import UserActivity from "../models/userActivity";
import UserAverageSession from "../models/userAverageSession";
import UserPerformance from "../models/userPerformances";


//Switch a false pour désactiver le mode mock
const isMockEnabled = true;

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
                    
                    //Mode local
                    console.log("Données provenant du mock");
                    
                    const data = userMockedDatas;

                    // Récupération des données principales de l'utilisateur
                    const user = data.USER_MAIN_DATA.find(user => user.id === userId);
                    if (user) setUserDatas(new UserData(user));

                    // Récupération et formatage des données d'activités
                    const activity = data.USER_ACTIVITY.find(activity => activity.userId === userId);
                    if (activity) setUserActivity(new UserActivity(activity));

                    // Récupération des sessions moyennes
                    const averageSession = data.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
                    if (averageSession) setUserAverageSession(new UserAverageSession(averageSession));

                    // Récupération des performances utilisateur
                    const performances = data.USER_PERFORMANCE.find(perf => perf.userId === userId);
                    if (performances) setUserPerformances(new UserPerformance(performances));

                    return;
                }
                
                //Mode API
                console.log("Données provenant de l'API");

                const user = await getUser(userId);
                setUserDatas(new UserData(user));

                const activity = await getUserActivity(userId);
                setUserActivity(new UserActivity(activity));

                const averageSession = await getUserAverageSession(userId);
                setUserAverageSession(new UserAverageSession(averageSession));

                const performances = await getUserPerformance(userId);
                setUserPerformances(new UserPerformance(performances));

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
