import PropTypes from "prop-types";
import "./styles.scss";

function Nutrient ({infos, icons}) {    

    return (
        <div className="nutrient">
            <img src={icons} alt="icone"/>
            <p className="value">{infos.value}</p>
            <p className="type">{infos.type}</p>
        </div>
    )
}

// Validation props
Nutrient.propTypes = {
    infos: PropTypes.object,
    icons: PropTypes.node,
}
export default Nutrient;