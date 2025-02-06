import { useState, useEffect } from "react";

function useUser(userId) {
    const [userDatas, setUserDatas] = useState();
    const [userActivity, setUserActivitys] = useState ();
   

    useEffect(() => {
        const dataUrl = "/userDatas.json";

        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                //Récupération des données principales de l'utilisateur
                const user = data.USER_MAIN_DATA.find(user => user.id === userId);
                setUserDatas(user);

                //Récupération des données d'activités de l'utilisateur
                const activity = data.USER_ACTIVITY.find(activity => activity.userId === userId);     

                //vérification de l'existance des données de session sous forme de tableau
                if (activity && Array.isArray(activity.sessions)) {
                    //Remplacement de la date par un index de jour
                    const formatteActivityDatas = activity.sessions.map((session, index) => ({
                        ...session,
                        day: index + 1,
                    }));   
                    
                    setUserActivitys(formatteActivityDatas);
                }

            })
            .catch((error) => {
                console.error("Erreur lors du fetch des données", error);
                
        });
},[userId] );

return {userDatas, userActivity};
}

export { useUser }; 