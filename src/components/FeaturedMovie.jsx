import { useState, useEffect, useContext } from 'react';
import FetchTMDB from '../service/FetchTMDB';
import { Link } from 'react-router-dom';
import { context } from '../context/NetflixContext';
import { Add, HighlightOffOutlined } from '@material-ui/icons';

export function FeaturedMovie({ item }) {
  const [movieTrailer, setMovieTrailer] = useState([]);
  const [trailerId, setTrailerId] = useState('');

  const { changeMyList, myList } = useContext(context)

  useEffect(() => {
    const getMovieTrailer = async () => {
      const data = await FetchTMDB.fetchMovieTrailer(item.id);
      setMovieTrailer(data);
      if (data.results.length > 0) {
        const getTrailer = data.results.find(item => item.type === 'Trailer');
        return setTrailerId(getTrailer.key);
      }
      setTrailerId(null);
    }
    getMovieTrailer();
  }, [item]);

  const isOnTheList = myList.find((film) => film.id === item.id);

  const description = item.overview.length > 200 ? item.overview.substring(0, 200) + '...' : item.overview;
  const getDate = new Date(item.first_air_date);
  const getGenres = item.genres.map(genre => genre.name).join(', ');
  const pontos = (item.vote_average * 100 / 10).toFixed(0);

  return (
    <section
      className="md:h-screen h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
      }}
    >
      <div className="w-[inherit] h-[inherit] bg-gradient-to-t from-smoky-black">
        <div
          className="w-[inherit] h-[inherit] flex flex-col md:justify-center justify-end pl-8 pb-36 pt-16"
          style={{
            background: 'linear-gradient(to right, #111 30%, transparent 70%)',
          }}
        >
          <div className="md:text-6xl text-4xl font-bold">{item.original_name}</div>
          <div className="font-bold md:text-lg text-base mt-4 flex gap-4">
            <div className="text-green-450">{pontos == 0 ? '70' : pontos}% relevante</div>
            <div>{getDate.getFullYear()}</div>
            <div>
              {item.number_of_seasons} temporada
              {item.number_of_seasons != 1 && 's'}
            </div>
          </div>
          <div className="mt-4 md:text-xl md:block hidden text-sm max-w-full mr-7 text-gray-400 md:max-w-[40%]">
            {description}
          </div>
          <div className="mt-4 flex gap-3 items-center order-2 md:order-1">
            <a
              href="#"
              className="hover:opacity-70 transition-all font-bold md:py-3 py-1 md:px-6 px-3 rounded md:text-xl text-base bg-[#333] text-white md:hidden w-20 text-center"
            >
              + Info
            </a>
            {trailerId !== null ? (
              <Link
              to={`movie/${movieTrailer.id}/${trailerId}`}
              className="font-bold md:py-3 py-1 md:px-6 px-3 rounded md:text-xl text-base bg-white text-black hover:opacity-70 transition-colors"
            >
              ▶ Assistir
            </Link>
            ) : (
              <button disabled={true} className="font-bold md:py-3 py-1 md:px-6 px-3 rounded md:text-xl text-base bg-white text-black hover:opacity-70 transition-colors">
                ▶ Assistir
              </button>
            )}
            
            <button
              type="button"
              onClick={() => changeMyList(item)}
              className="hover:opacity-70 transition-all font-bold md:py-3 py-1 md:px-6 px-3 rounded md:text-xl text-base bg-[#333] text-white"
            >
              {isOnTheList ? (
                <span><HighlightOffOutlined /> Minha lista</span>
              ) : (<span><Add /> Minha lista</span>)}
            </button>
          </div>
          <div className="mt-4 md:text-lg text-sm text-[#999] ">
            <strong>Gêneros: </strong>
            <span> {getGenres}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
