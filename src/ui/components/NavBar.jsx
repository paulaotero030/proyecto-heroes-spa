import { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const [searchText, setSearchText] = useState('');

  const onLogout = () => {
    navigate('/login', {
      replace: true,
    });
    logout();
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchText}`);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark p-2'>
      <div className='navbar-collapse'>
        <Link className='navbar-brand' to='/'>
          Associations
        </Link>
        <div className='navbar-nav'>
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/marvel'
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? 'active' : ''}`
            }
            to='/dc'
          >
            DC
          </NavLink>
        </div>

        <form onSubmit={onSearchSubmit} className='form-inline ml-2' margin>
          <div
            className='input-group ml-2'
            style={{ marginLeft: '25px', padding: '5px' }}
          >
            <input
              type='text'
              className='form-control'
              placeholder='Search'
              value={searchText}
              onChange={handleInputChange}
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-success'
                onClick={onSearchSubmit}
                type='button'
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
        <ul className='navbar-nav ml-auto'>
          <span className='nav-item nav-link text-primary'>{user?.name}</span>
          <button onClick={onLogout} className='nav-item nav-link btn'>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
