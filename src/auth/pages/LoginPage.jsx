import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '') {
      login(username);
      navigate('/', { replace: true });
    } else {
      alert('Por favor ingresa un nombre de usuario válido.');
    }
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
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
        <h2
          style={{
            color: 'white',
            fontSize: '24px',
            textShadow: '4px 4px 10px black',
          }}
        >
          Login
        </h2>

        <input
          type='text'
          placeholder='Enter your name'
          value={username}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
        <button
          className='btn'
          onClick={handleLogin}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            padding: '4px 17px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Enter
        </button>
      </div>
    </div>
  );
};
