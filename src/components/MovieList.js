import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
    return (
        // This div will contain all the MovieCard components in the MovieList.
        <div id='List' className="movie-list" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {/* This map function will loop through each movie in the array */}
            {movies?.map(movie => (
                // This creates a new MovieCard component with props passed down from the parent component
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    description={movie.description}
                    posterURL={movie.posterURL}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default MovieList;




