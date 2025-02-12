import { useParams } from "react-router-dom";
import { useUser } from "../../../data/fetchUserDatas";
import "./styles.scss";
import Welcome from "../welcome";
import Header from "../../header";
import Sidebar from "../../sidebar";
import Activity from "../userActivity";
import AverageActivity from "../averageActivity";
import Performance from "../performances";
import Objectif from "../objectif"
import Nutrient from "../nutrients";

function Dashboard() {

    const { id } = useParams();
    const { userDatas, userActivity, userAverageSession, userPerformances } = useUser(parseInt(id));

    if (!userDatas) {
        return <div>Utilisateur introuvable</div>;
    }

    return (
        <div className="mainContainer">
            <Header />
            <div className="main">
                <Sidebar />
                <div className="dashboard">
                    <Welcome firstName={userDatas.userInfos.firstName} />
                    <div className="bigBlock">
                        <div>
                            <Activity activityDatas={userActivity} />
                            <div className="block">
                                <AverageActivity AverageSessionDatas={userAverageSession ? userAverageSession.sessions : []} />
                                <Performance performanceDatas={userPerformances} />
                                <Objectif score={userDatas.score} todayScore={userDatas.todayScore} />
                            </div>
                        </div>
                        <div className="lastBlock">
                            {/*conversion de l'objet en tableau pour rendre le map possible*/}
                            {Object.entries(userDatas.keyData).map(([nutrientName, nutrientValue]) => (
                                <Nutrient key={nutrientName} infos={{ type: nutrientName, value: nutrientValue }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;