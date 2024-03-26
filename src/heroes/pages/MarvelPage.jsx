import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher='Marvel Comics' />
    </div>
  );
};
