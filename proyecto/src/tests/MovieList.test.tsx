import React from 'react';

import 'ignore-styles';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Header from '../components/Header/Header';


import App from '../App';



describe('MovieList component', () => {

  test.only('prueba', ()=> {
  render(<App/>);
  });

  test('renders header', () => {
    render(<Header />);
    // Tu lógica de prueba aquí
  });
  
});

