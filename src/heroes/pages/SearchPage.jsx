import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { HeroCard } from '../components/HeroCard';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const [searchQuery, setSearchQuery] = useState(q);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setSearchQuery(q);
  }, [q]);

  useEffect(() => {
    if (searchQuery) {
      const results = getHeroesByName(searchQuery);
      setHeroes(results);
    } else {
      setHeroes([]);
    }
  }, [searchQuery]);

  return (
    <div
      style={{
        backgroundColor: 'lightgreen',
        padding: '210px',
      }}
    >
      <h1>Search Results for: {searchQuery}</h1>
      <div className='row'>
        {heroes.length === 0 ? (
          <div
            className='alert alert-info'
            style={{
              justifyContent: 'center',
              width: 'auto',
              borderRadius: '50px',
            }}
          >
            No results found.
          </div>
        ) : (
          heroes.map((hero) => <HeroCard key={hero.id} {...hero} />)
        )}
      </div>
    </div>
  );
};
