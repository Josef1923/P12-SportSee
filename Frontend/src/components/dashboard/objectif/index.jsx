import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import "./styles.scss";

function Objectif({ score, todayScore }) {

    const scoreToUse = score ?? todayScore;

    if (!scoreToUse) {
        return <p>Chargement des données activité...</p>;
    }

    const data = [
        { name: "Score", value: scoreToUse * 100, fill: "#FF0000" },
        { name: "Reste", value: 100 - (scoreToUse * 100), fill: "#FBFBFB" }
    ];

    return (
        <div className="score">
            <p className="title">Score</p>
            <ResponsiveContainer width="100%" height={250}>
                <RadialBarChart
                    cx="50%" cy="50%" innerRadius="75%" outerRadius="90%"
                    data={data} startAngle={90} endAngle={450}>
                    <circle cx="50%" cy="50%" r="34%" fill="white" />
                    <RadialBar dataKey="value" cornerRadius={50} />
                </RadialBarChart>
            </ResponsiveContainer>
            <div className="scoreText">
                <p className="scoreRatio">{scoreToUse * 100}%</p>
                <p className="text">de votre<br /> objectif</p>
            </div>
        </div>
    );
}


// Validation props
Objectif.propTypes = {
    score: PropTypes.number,
    todayScore: PropTypes.number,
}

export default Objectif;
