import { useParams } from "react-router-dom";
import { useUser } from "../../../data/fetchUserDatas";
import Welcome from "../welcome";
import Header from "../../header";
import Sidebar from "../../sidebar";

function Dashboard() {

    const { id } = useParams();
    const userDatas = useUser(parseInt(id));


    if (!userDatas) {
        return <div>Utilisateur introuvable</div>;
    }


    return (
        <div className="app">
            <Header/>
            <div className="main">
                <Sidebar/>
                <div className="dashboard">
                    <Welcome firstName={userDatas.userInfos.firstName} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;