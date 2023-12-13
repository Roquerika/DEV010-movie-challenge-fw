import { Movie } from '../types'; // se esta utilizando el tipo Movie del archivo types

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 

// En movieApi.ts
export const fetchMoviesByGenre = async (genreIds: string, page: number): Promise<{results: Movie[], total_pages: number}> => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}&page=${page}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      results: data.results,
      total_pages: data.total_pages
    };
  } catch (error) {
    console.error('Error fetching movies:', error);
    return { results: [], total_pages: 0 }; /*indicar el error en la interfaz (no silenciar errores)*/
  }
};
