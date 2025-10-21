import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from 

const Loading = () => {
    return (
        <div className="loading-spinner">
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}

export default Loading