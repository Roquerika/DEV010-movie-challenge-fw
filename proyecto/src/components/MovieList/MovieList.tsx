import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import { Movie } from '../../types';
import './MovieList.css';
import { fetchMoviesByGenre } from '../../api/movieApi';

const CRIME_GENRE_ID = '80'

// const loadMovies = async ({ onSuccess, genreIds, currentPage }) => {
//   const genreIds = '80'; // Géneros crimen
//   const data = await fetchMoviesByGenre(genreIds, currentPage);
//   onSuccess(data)
// };

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    /* TODO: Sacar esta funcion del componente
      ejemplo:

      loadMovies({
        genreIds: '80',
        currentPage,
        onSuccess: (data) => {
          setMovies(data.results);
          setTotalPages(data.total_pages);
        }
      })
    */
    const loadMovies = async () => {
      const genreIds = CRIME_GENRE_ID; // Géneros crimen
      const data = await fetchMoviesByGenre(genreIds, currentPage);
      setMovies(data.results);
      setTotalPages(data.total_pages);
    };
    loadMovies();
  }, [currentPage]);
  // Funciones para cambiar la página
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
      {/* 
        TODO: Realizar un componente para la paginación

        compartir el estado de currentPage a traves de props (props drilling)
      */}
      <div className="pagination-controls">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>Siguiente</button>
      </div>
    </div>
  );
};
export default MovieList;