import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login('Paula Otero');

    navigate('/', {
      replace: true,
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url('https://images.hdqwalls.com/wallpapers/marvel-vs-dc-4k-iu.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <div
        className='container'
        style={{
          backgroundColor: 'rgba(0, 128, 0, 0.2)',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        {/* <h1>LoginPage</h1> */}
        <hr />
        <button
          className='btn'
          onClick={onLogin}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Ingresar
        </button>
      </div>
    </div>
  );
};
