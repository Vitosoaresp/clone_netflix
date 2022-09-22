import { useContext, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import { context } from '../context/NetflixContext';

export function MovieRow({ title, items }) {

  const { setMovieInDetail } = useContext(context)
  const [scroolX, setScroolx] = useState(0);

  const handleLeftArrow = () => {
    let x = scroolX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScroolx(x);
  };

  const handleRightArrow = () => {
    let x = scroolX - Math.round(window.innerWidth / 2);
    const listW = items.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScroolx(x);
  };

  return (
    <div className="mb-[30px] -mt-20 group">
      <h2 className="m-0 ml-[30px] font-bold text-xl">{title}</h2>

      <div className="absolute w-10 h-56 left-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black group-hover:opacity-60 md:opacity-0 opacity-60 cursor-pointer  overflow-hidden transition-all" onClick={handleLeftArrow}>
        <NavigateBefore className="text-5xl" />
      </div>

      <div className="absolute w-10 h-56 right-0 z-10 flex items-center justify-center overflow-hidden bg-black group-hover:opacity-60 backdrop-blur-sm md:opacity-0 opacity-60 cursor-pointer transition-all" onClick={handleRightArrow}>
        <NavigateNext className="text-5xl" />
      </div>

      <div className="overflow-x-hidden pl-7">
        <div className="transition-all ease-linear duration-500 " style={{ marginLeft: scroolX, width: items.results.length * 150 }}>

          {items !== undefined && items.results.length > 0 ? (
            items.results.map((film, key) => (
              <Dialog.Trigger
                key={key}
                className="inline-block w-[150px] cursor-pointer"
                onClick={ () => setMovieInDetail(film)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w300${film.poster_path}`}
                  alt={film.original_title}
                  className="w-full transform scale-[0.9] hover:scale-[1] transition-all duration-200 ease-in "
                />
              </Dialog.Trigger>
            ))
          ) : <div>No results</div> }
        </div>
      </div>
    </div>
  );
}
