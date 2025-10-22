const LoadMovies = ({movies}) => {
    let movieJSX = [...{movies}].map(({movie}, idx) => {
        return <li id={idx}>{movie}</li>
    })

    return <ul id="movie-list" hidden='true'>
        {movieJSX}
    </ul>
}

export default LoadMovies