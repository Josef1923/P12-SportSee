import PropTypes from "prop-types"
import {USER_MAIN_DATA} from "../../../_mocks/userMock"

function Welcome ({firstName}) {
  
    return (
        <div className="welcome">
            <h1>Bonjour{firstName}</h1>
        </div>
    )
}

// Validation props
Welcome.propTypes = {
    firstName: PropTypes.string,
}

export default Welcome;