import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { logged } = useContext(AuthContext);

  console.log(children);

  return logged ? children : <Navigate to='/login' />;
};
