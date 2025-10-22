import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner"

const LoadingIcon = () => {
    return (
        <div className="loading-spinner">
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}

export default LoadingIcon