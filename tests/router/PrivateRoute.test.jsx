import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <PrivateRoute />', () => {
  test('debe de mostrar el children si esta autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        id: 'abc',
        name: 'Paula',
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(screen.getByText('Ruta privada')).toBeTruthy();
  });
});
