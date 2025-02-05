import PropTypes from "prop-types";
import "./styles.scss";

function Welcome ({firstName}) {    
  
    return (
        <div className="welcome">
            <h1>Bonjour <span className="firstname">{firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

// Validation props
Welcome.propTypes = {
    firstName: PropTypes.string,
}

export default Welcome;