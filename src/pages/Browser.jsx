import { useContext } from 'react';
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

      <section className="flex justify-center items-center ">
        { movieInDetail && <MovieInDetail />}
      </section>

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="mt-[-130px]">
        {listMovies &&
          listMovies.map((movie, key) => (
            <MovieRow key={key} title={movie.title} items={movie.items} />
          ))}
      </section>
      
      <Footer />

      {listMovies.length <= 0 && (
        <Loading />
      )}
    </div>
  );
}

