const LoadMovies = ({movies}) => {
    let movieJSX = movies.map((movie, idx) => {
        return <li id={idx}>{movie}</li>
    })

    return <ul id="movie-list">
        {movieJSX}
    </ul>
}

export default LoadMovies