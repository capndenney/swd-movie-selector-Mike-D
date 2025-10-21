import { useState } from 'react'
import './App.css'
import MovieSelector from './MovieSelector'
import Loading from './Loading';

export default function App () {
  return (
    <div>
      <h1>Movie Browser</h1>
      {/* <MovieSelector /> */}
      <Loading />
    </div>
  );
}
