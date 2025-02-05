import PropTypes from "prop-types"

function Welcome ({firstName}) {    
  
    return (
        <div className="welcome">
            <h1>Bonjour {firstName}</h1>
        </div>
    )
}

// Validation props
Welcome.propTypes = {
    firstName: PropTypes.string,
}

export default Welcome;