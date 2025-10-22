import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'
import LoadingIcon from './components/LoadingIcon';
import movieGenres from './sampleData/movieData';
import LoadMovies from './components/LoadMovies';
import { flushSync } from 'react-dom';

const LOADING_MS = 800;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  async function handleFetch() {
    setError('');
    setMovies([]);
    if (!selectedGenre) {
      setError('Please Select a genre to continue');
      return;
    }
    flushSync(() => setIsLoading(true));
    
    const genre = movieGenres.find((g) => g.GenreID === selectedGenre);
    const result = genre?.movieTitles ?? [];

    await delay(LOADING_MS);
    setMovies(result);
    setIsLoading(false);
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
