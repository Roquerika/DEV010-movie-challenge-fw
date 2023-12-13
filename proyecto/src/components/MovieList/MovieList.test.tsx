import { render, screen, waitFor } from '@testing-library/react';
import MovieList from './MovieList';

// En la parte superior de tu archivo de prueba
jest.mock('../../api/movieApi', () => ({
  fetchMoviesByGenre: jest.fn().mockResolvedValue({
    results: [
      { id: 1, title: 'Movie 1', releaseYear: 2022 },
      { id: 2, title: 'Movie 2', releaseYear: 2023 },
    ],
    total_pages: 10,
  }),
}));

describe('MovieList component', () => {
  test('renders movie data correctly', async () => {
    render(<MovieList />);

    // Espera a que los elementos de la película se muestren
    await waitFor(() => {
      expect(screen.getByText('Movie 1')).toBeInTheDocument();
      expect(screen.getByText('Movie 2')).toBeInTheDocument();
    });

    // Otras pruebas pueden incluir la comprobación de la paginación
  });

  // Aquí puedes añadir más tests relacionados con la paginación o interacción del usuario
});