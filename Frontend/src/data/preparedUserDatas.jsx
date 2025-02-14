import { useState, useEffect } from "react";
import userMockedDatas from "../data/userDatas.json";

function useUser(userId) {
    const [userDatas, setUserDatas] = useState();
    const [userActivity, setUserActivitys] = useState();
    const [userAverageSession, setUserAverageSession] = useState();
    const [userPerformances, setUserPerformances] = useState();


    useEffect(() => {
        const data = userMockedDatas;

        //Récupération des données principales de l'utilisateur
        const user = data.USER_MAIN_DATA.find(user => user.id === userId);
        setUserDatas(user);

        //Récupération des données d'activités de l'utilisateur
        const activity = data.USER_ACTIVITY.find(activity => activity.userId === userId);

        //vérification de l'existance des données de session sous forme de tableau
        if (activity && Array.isArray(activity.sessions)) {
            //Remplacement de la date par un index de jour
            const formattedActivityDatas = activity.sessions.map((session, index) => ({
                ...session,
                day: index + 1,
            }));

            setUserActivitys(formattedActivityDatas);
        }

        //Récupération des données d'activités moyenne de l'utilisateur
        const averageSession = data.USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
        setUserAverageSession(averageSession);


        const performances = data.USER_PERFORMANCE.find(perf => perf.userId === userId);
        if (performances) {
            const formattedPerfs = performances.data.map((item) => ({
                value: item.value,
                kind: performances.kind[item.kind]
            }));
            setUserPerformances(formattedPerfs);
        }
    }, [userId]);
    return { userDatas, userActivity, userAverageSession, userPerformances };
}

export { useUser }; 