import { useState } from "react";

const MovieSelector = () => {
    setIsLoading(true).setTimeout(500);

        const movieGenres = [
            {Genre: "Action", movieTitle: ["Avengers", "Die Hard", "John Wick"]},
            {Genre: "Comedy", movieTitle: ["Happy Gilmore", "The Naked Gun", "Anchorman"]},
            {Genre: "Drama", movieTitle: ["The Departed", "12 Angry Men", "Good Will Hunting"]},
            {Genre: "Western", movieTitle: ["True Grit", "Something else John Wayne", "The OK Corral movie"]},
            {Genre: "Documentary", movieTitle: ["Ken Burns Civil War", "Andre", "Planet Earth"]}
        ];

    return (
        <h3>{movieGenres[1]}</h3>
    )
}

export default MovieSelector