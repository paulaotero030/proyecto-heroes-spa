import { Navbar } from '../../ui/components/NavBar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage';
import { DcPage } from '../pages/DcPage';
import { SearchPage } from '../pages/SearchPage';
import { HeroPage } from '../pages/HeroPage';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
        <Routes>
          <Route path='marvel' element={<MarvelPage />} />
          <Route path='dc' element={<DcPage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='hero/:id' element={<HeroPage />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};
