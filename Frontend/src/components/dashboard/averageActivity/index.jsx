import PropTypes from "prop-types";

function AverageAcvtivity ({AverageSessionDatas}) {
    console.log("Données de l'activité moyenne :", AverageSessionDatas);

    if (!AverageSessionDatas) return <p>Chargement des données dactivité...</p>;
}

// Validation props
AverageAcvtivity.propTypes = {
    AverageSessionDatas: PropTypes.array,
}
export default AverageAcvtivity;