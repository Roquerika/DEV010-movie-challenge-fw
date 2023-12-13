import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types';
import './MovieList.css';


interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

</div>
  );
};

export default MovieList;



// const CRIME_GENRE_ID = '80'


//   const genreIds = '80'; Géneros crimen
