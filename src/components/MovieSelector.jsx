import movieGenres from "../sampleData/movieData";

const MovieSelector = ({selectedGenre, setSelectedGenre}) => {
    let genreJSX = [...movieGenres].map((genre) => {
        return <option value={genre.GenreID} id={genre.GenreID}>{genre.GenreName}</option>
    })

    return (
        <div>
            <select id="genre-select" name="genre-select" value={selectedGenre} onChange={(e) => {setSelectedGenre(e.target.value)}}>
                <option value="" id="null"></option>
                {genreJSX}
            </select>
        </div>
        
)}

export default MovieSelector