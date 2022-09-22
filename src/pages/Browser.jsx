import { useContext } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { MovieRow } from '../components/MovieRow';
import { context } from '../context/NetflixContext';
import { FeaturedMovie } from '../components/FeaturedMovie';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { Footer } from '../components/Footer';
import { MovieInDetail } from '../components/MovieInDetail';

export function Browser() {
  const { listMovies, featuredData, movieInDetail } = useContext(context);

  return (
    <div className="relative">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <Dialog.Root className="mt-[-190px]">
        {listMovies &&
          listMovies.map((movie, key) => (
            <MovieRow key={key} title={movie.title} items={movie.items} />
          ))}
        {movieInDetail && <MovieInDetail />}
      </Dialog.Root>
      
      <Footer />

      {listMovies.length <= 0 && (
        <Loading />
      )}
    </div>
  );
}

