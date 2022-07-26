import { useContext } from 'react';
import { MovieRow } from './components/MovieRow';
import { context } from './context/NetflixContext';
import { FeaturedMovie } from './components/FeaturedMovie';
import { Header } from './components/Header';

function App() {
  const { listMovies, featuredData } = useContext(context);

  return (
    <div className="">
      <Header />

      {featuredData && <FeaturedMovie item={featuredData} />}

      <section className="mt-[-130px]">
        {listMovies &&
          listMovies.map((movie, key) => (
            <MovieRow key={key} title={movie.title} items={movie.items} />
          ))}
      </section>

      <footer className="m-12 text-center">
        Feito com{' '}
        <span role="img" aria-label="coração" className="text-red-500">
          ❤
        </span>{' '}
        por <a href="https://github.com/Vitosoaresp" className="font-semibold">Vitor Soares </a>com React e Tailwind CSS <br />
        Direitos de imagem para Netflix <br />
        Dados retirados do site{' '}
        <a href="https://www.themoviedb.org/">TheMovieDB</a>
      </footer>

      {listMovies.length <= 0 && (
        <div className="fixed left-0 top-0 z-50 right-0 bottom-0 bg-black flex justify-center items-center">
          <img
            src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
            width="500px"
            alt="carregando..."
          />
        </div>
      )}
    </div>
  );
}

export default App;
