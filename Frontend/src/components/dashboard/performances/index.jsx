import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import './styles.scss';


function Performance({ performanceDatas }) {

    // Base traduction des kind
    const translate = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité"
    };

    if (!performanceDatas) return <p>Chargement des données dactivité...</p>;

    // Traduit les éléments
    const translatedNames = performanceDatas.map(items => ({
        ...items, //on garde les valeurs d'origine
        kind: translate[items.kind] //remplacement de kind par version traduite
    }));
    
    // Définition de l'ordre d'affichage des éléments
    const correctOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];

    // Prend les données traduites pour les mettre dans l'ordre souhaité
    const sortedData = [...translatedNames].sort(
        (a, b) => correctOrder.indexOf(a.kind) - correctOrder.indexOf(b.kind)
    );
    
    return (
        <div className="performances">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={sortedData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fontSize: 12, fontWeight: 500, fill: "#FFFFFF" }} />
                    <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                    <Tooltip cursor={false} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}


Performance.propTypes = {
    performanceDatas: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            kind: PropTypes.string,
        })
    )
};

export default Performance;