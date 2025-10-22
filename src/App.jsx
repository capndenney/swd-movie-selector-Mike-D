import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'
import LoadingIcon from './components/LoadingIcon';
import movieGenres from './sampleData/movieData';
import LoadMovies from './components/LoadMovies';

export default function App () {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  function handleFetch() {
    const genreFind = movieGenres.find(genre => genre.GenreID === selectedGenre)
    setError("")
    if(selectedGenre) {
      setMovies(genreFind.movieTitles)
    } else { 
      setError("Please Select a genre to continue")
      setMovies([])
    }
  }

  return (
    <div>
      <h1>Movie Browser</h1>
      <MovieSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
      {isLoading && <LoadingIcon />}
      <button onClick={handleFetch}>Fetch Movies</button>
      {error && <p className='error-message'>{error}</p>}
      {movies.length > 0 && <LoadMovies movies={movies} />}
    </div>
  );
}
