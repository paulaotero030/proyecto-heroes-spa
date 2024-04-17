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

// import { useLocation, useNavigate } from 'react-router-dom';
// import queryString from 'query-string';

// import { useForm } from '../../hooks/useForm';
// import { HeroCard } from '../components/HeroCard';
// import { getHeroesByName } from '../helpers/getHeroesByName';

// export const SearchPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const { q = '' } = queryString.parse(location.search);
//   const heroes = getHeroesByName(q);

//   const { searchText, onInputChange } = useForm({
//     searchText: q,
//   });

//   const onSearchSubmit = (event) => {
//     event.preventDefault();

//     navigate(`?q=${searchText}`);
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: 'lightgreen',
//         padding: '200px',
//         width: '100%',
//         height: '100%',
//       }}
//     >
//       <h1>Busca tu Superhéroe</h1>
//       <hr />
//       <div className='row'>
//         <div className='col-5'>
//           <h4></h4>
//           <hr />
//           <form onSubmit={onSearchSubmit}>
//             <input
//               type='text'
//               placeholder='Search a hero'
//               className='form-control'
//               name='searchText'
//               padding='20px'
//               autoComplete='off'
//               value={searchText}
//               onChange={onInputChange}
//             />

//             <button
//               style={{
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 marginTop: '5%',
//               }}
//             >
//               Search
//             </button>
//           </form>
//         </div>

//         <div className='col-7'>
//           <h4></h4>
//           <hr />

//           {q === '' ? (
//             <div className='alert alert-primary animate__animated animated__fadeIn'>
//               Search a hero
//             </div>
//           ) : (
//             heroes.length === 0 && (
//               <div className='alert alert-danger animate__animated animated__fadeIn'>
//                 No hero with <b>{q}</b>
//               </div>
//             )
//           )}

//           {heroes.map((hero) => (
//             <HeroCard key={hero.id} {...hero} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
