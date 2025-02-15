import { useParams } from "react-router-dom";
import { useUser } from "../../datas/preparedUserDatas";
import "./styles.scss";
import Welcome from "../../components/dashboard/welcome";
import Header from "../../components/header";
import Sidebar from "../../components/sidebar";
import Activity from "@components/userActivity";
import AverageActivity from "@components/averageActivity";
import Performance from "@components/performances";
import Objectif from "@components/objectif"
import Nutrient from "@components/nutrients";

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
                                <AverageActivity AverageSessionDatas={userAverageSession} />
                                <Performance performanceDatas={userPerformances} />
                                <Objectif score={userDatas.score} />
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