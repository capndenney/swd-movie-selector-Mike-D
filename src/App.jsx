import { useState } from 'react'
import './App.css'
import MovieSelector from './components/MovieSelector'
import LoadingIcon from './components/LoadingIcon';

export default function App () {
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);

  return (
    <div>
      <h1>Movie Browser</h1>
      <MovieSelector />
    </div>
  );
}
