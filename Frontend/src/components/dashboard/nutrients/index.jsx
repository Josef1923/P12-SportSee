import PropTypes from "prop-types";
import "./styles.scss";
import carbohydrateIcon from "../../../assets/icons/nutrition/carbohydrate.svg";
import kcalIcon from "../../../assets/icons/nutrition/kcal.svg";
import lipidIcon from "../../../assets/icons/nutrition/lipid.svg";
import proteinIcon from "../../../assets/icons/nutrition/protein.svg";


function Nutrient({ infos }) {

    const translate = {
        calorieCount: "Calories",
        proteinCount: "Protéines",
        carbohydrateCount: "Glucides",
        lipidCount: "Lipides",
    };

    const units = {
        calorieCount: "kCal",
        proteinCount: "g",
        carbohydrateCount: "g",
        lipidCount: "g",
    };

    const icons = {
        calorieCount: kcalIcon,
        proteinCount: proteinIcon,
        carbohydrateCount: carbohydrateIcon,
        lipidCount: lipidIcon,
    };

    // Traduit les éléments
    const translatedType = translate[infos.type];
    const unit = units[infos.type];
    const usedIcon = icons[infos.type];

    return (
        <div className="nutrient">
            <img src={usedIcon} alt="icone" className="icon"/>
            <div className="valueType">
                <p className="value">{infos.value}<span>{unit}</span></p>
                <p className="type">{translatedType}</p>
            </div>
        </div>
    )
}

// Validation props
Nutrient.propTypes = {
    infos: PropTypes.object,
    icons: PropTypes.node,
}

export default Nutrient;