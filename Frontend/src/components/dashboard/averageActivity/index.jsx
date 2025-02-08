import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, YAxis } from "recharts";
import "./styles.scss";


// Tableau pour convertir les chiffres en jours de la semaine
const numbersToDays = ["", "L", "M", "M", "J", "V", "S", "D"];

// Composant pour personnalisé Tooltip pour avoir la durée de session d'affichée
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltipBackground">
                <p className="tooltipText">{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

function AverageActivity({ AverageSessionDatas }) {

    if (!AverageSessionDatas) {
        return <p>Chargement des données activité...</p>;
    }

    return (
        <div className="sessions">
            <p className="graphTitle">Durée moyenne des{"\n"} sessions</p>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={AverageSessionDatas}>
                    <XAxis dataKey="day"
                           tickFormatter={(day) => numbersToDays[day]}
                           axisLine={false}
                           tickLine={false}
                           tick={{fill: "rgba(255, 255, 255, 1)",dy:-55}} />
                    <YAxis yAxisId="left" hide={true} />
                    <Tooltip content={<CustomTooltip />} cursor={false} />
                    <Line yAxisId="left" type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

// Validation props
AverageActivity.propTypes = {
    AverageSessionDatas: PropTypes.array,
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};



export default AverageActivity;
