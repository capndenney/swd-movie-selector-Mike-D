import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'
import LoadingIcon from './components/LoadingIcon';
import movieGenres from './sampleData/movieData';

export default function App () {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  function handleFetch() {
    const genreFind = movieGenres.find(genre => genre.GenreID === selectedGenre)
    setMovies(genreFind.movieTitles);
    
  }

  return (
    <div>
      <h1>Movie Browser</h1>
      <MovieSelector />
      {isLoading && <LoadingIcon />}
      <button onClick={() => (handleFetch)}>Fetch Movies</button>
      
    </div>
  );
}
