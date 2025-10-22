import { useState } from "react";
import movieGenres from "../sampleData/movieData";

const MovieSelector = () => {
    let genreJSX = [...movieGenres].map((genre) => {
        return <option value={genre.GenreID} id={genre.GenreID}>{genre.GenreName}</option>
    })

    const [selectedGenre, setSelectedGenre] = useState('');

    return (
        <div>
            <select id="genre-select" name="genre-select" value={selectedGenre}>
                <option value="" id="null"></option>
                {genreJSX}
            </select>
            <button onClick={() => (setSelectedGenre())}>Fetch Movies</button>
        </div>
        
)}

export default MovieSelector