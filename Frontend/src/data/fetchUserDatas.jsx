import { useState, useEffect } from "react";

function useUser(userId) {
    const [userDatas, setUserDatas] = useState();
   

    useEffect(() => {
        const dataUrl = "/userDatas.json";

        fetch(dataUrl)
            .then((response) => response.json())
            .then((data) => {
                const user = data.USER_MAIN_DATA.find(user => user.id === userId);
                setUserDatas(user);
       
            })
            .catch((error) => {
                console.error("Erreur lors du fetch des données", error);
                
        });
},[userId] );

return userDatas;
}

export { useUser }; 