import { useContext, useEffect, useState } from "react";
import { CloseOutlined } from '@material-ui/icons';
import FetchTMDB from '../service/FetchTMDB';
import { context } from "../context/NetflixContext";

export function MovieInDetail() {
  const [renderMovie, setRenderMovie] = useState(undefined);

  const { movieInDetail, setMovieInDetail } = useContext(context);

  const getTrailer = async () => {
    const { results } = await FetchTMDB.fetchMovieTrailer(movieInDetail.id);
    if(results) {
      const key = results.find((attr) => attr.type === 'Trailer').key;
      return setRenderMovie(<iframe src={ `https://www.youtube.com/embed/${key}` } height="100%" width="100%" />)
    }
    return setRenderMovie(<img src={`https://image.tmdb.org/t/p/original/${movieInDetail.backdrop_path}`} alt="" />)
  };

  useEffect(() => {
    const fetch = async () => {
      await getTrailer();
    }
    fetch();
  }, [movieInDetail]);

  return (
    <div className="absolute w-3/4 bg-black z-50 top-10 flex flex-col justify-start item-center text-white">
      <button
        onClick={() => setMovieInDetail(undefined)}
        className="absolute right-5 top-5"
      >
        <CloseOutlined color="white" />
      </button>
      <div className="w-full h-96">{renderMovie && renderMovie}</div>
      <div className="flex flex-col p-6 w-full">
        <div className="flex w-full pb-6">
          <span className="text-green-450">
            {((movieInDetail.vote_average * 100) / 10).toFixed() || 80}%
            relevante
          </span>
          <p className="text-center font-bold text-xl w-2/3">
            {movieInDetail.original_name}
          </p>
        </div>
        <div>
          <p>{movieInDetail.overview}</p>
        </div>
      </div>
    </div>
  );
}
