import { useParams } from "react-router-dom";
import { useUser } from "../../../data/fetchUserDatas"; 
import Welcome from "../welcome";

function Dashboard() {

    const { id } = useParams();
    const  userDatas = useUser(parseInt(id));

    
    if (!userDatas) {
        return <div>Utilisateur introuvable</div>;
    }


    return (
        <div className="dashboard">
            <Welcome firstName={userDatas.userInfos.firstName} />         
        </div>
    );
}

export default Dashboard;