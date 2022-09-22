import { useContext, useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { CloseOutlined } from '@material-ui/icons';
import FetchTMDB from '../service/FetchTMDB';
import { context } from '../context/NetflixContext';

export function MovieInDetail() {
  const [renderMovie, setRenderMovie] = useState(undefined);

  const { movieInDetail } = useContext(context);

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
    <Dialog.DialogPortal>
      <Dialog.DialogOverlay className="bg-black/60 inset-0 fixed z-[150]">
        <Dialog.DialogContent className="fixed bg-zinc-800 z-[160] py-4 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[720px] h-full mt-5 shadow-lg shadow-black/25">
          <Dialog.Close className="right-2 fixed">
            <CloseOutlined color="white" />
          </Dialog.Close>
          <Dialog.DialogTitle className="w-full h-96">{renderMovie && renderMovie}</Dialog.DialogTitle>
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
        </Dialog.DialogContent>
      </Dialog.DialogOverlay>
    </Dialog.DialogPortal>
  );
}
