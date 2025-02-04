import PropTypes from "prop-types"
import {USER_MAIN_DATA} from "../../../data/userMock"
import { useParams } from "react-router-dom"

function Welcome ({firstName}) {

    const {id} = useParams();
    const user = USER_MAIN_DATA.find(user => user.id === id)

  
    return (
        <div className="welcome">
            <h1>Bonjour{user.firstName}</h1>
        </div>
    )
}

// Validation props
Welcome.propTypes = {
    firstName: PropTypes.string,
}

export default Welcome;