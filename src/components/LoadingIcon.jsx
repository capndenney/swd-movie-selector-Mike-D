import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const LoadingIcon = () => {
    return (
        <div className="loading-spinner">
            <FontAwesomeIcon icon={faSpinner} />
        </div>
    )
}

export default LoadingIcon