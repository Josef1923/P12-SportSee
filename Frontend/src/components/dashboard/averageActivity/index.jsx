import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, YAxis, Rectangle } from "recharts";
import "./styles.scss";


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

//Composant pour personnalisé Tooltip pour avoir le coté rouge dponcé à droite
const CustomCursor = ({ points, width }) => {
    const { x } = points[0];

    return (
        <Rectangle 
        className="customCursor"
            fill="rgba(0, 0, 0, 0.2)"
            x={x}
            y={0}
            width={width}
            height={263}
        />
    );
};

CustomCursor.propTypes = {
    points: PropTypes.arrayOf(PropTypes.object),
    width: PropTypes.number,
    height: PropTypes.number,
};



function AverageActivity({ AverageSessionDatas }) {

    // Tableau pour convertir les chiffres en jours de la semaine
    const numbersToDays = ["", "L", "M", "M", "J", "V", "S", "D"];

    if (!AverageSessionDatas) {
        return <p>Chargement des données activité...</p>;
    }

    return (
        <div className="sessions">
            <p className="graphTitle">Durée moyenne des{"\n"} sessions</p>
            <div className="chartContainer">
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={AverageSessionDatas}>
                    <XAxis dataKey="day"
                        tickFormatter={(day) => numbersToDays[day]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "rgba(255, 255, 255, 1)", dy: -5 }} />
                    <YAxis yAxisId="left" hide={true} domain={['dataMin - 10', 'dataMax + 30']} />
                    <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
                    <Line yAxisId="left" type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
                </LineChart>
            </ResponsiveContainer>
            </div>
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
