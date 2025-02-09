import { useParams } from "react-router-dom";
import { useUser } from "../../../data/fetchUserDatas";
import "./styles.scss";
import Welcome from "../welcome";
import Header from "../../header";
import Sidebar from "../../sidebar";
import Activity from "../userActivity";
import AverageActivity from "../averageActivity";
import Performance from "../performances";

function Dashboard() {

    const { id } = useParams();
    const { userDatas, userActivity, userAverageSession, userPerformances } = useUser(parseInt(id));

    if (!userDatas) {
        return <div>Utilisateur introuvable</div>;
    }

    return (
        <div className="app">
            <Header />
            <div className="main">
                <Sidebar />
                <div className="dashboard">
                    <Welcome firstName={userDatas.userInfos.firstName}/>
                    <Activity activityDatas={userActivity}/>
                    <div className="block">
                        <AverageActivity AverageSessionDatas={userAverageSession ? userAverageSession.sessions : []}/>
                        <Performance performanceDatas={userPerformances}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;