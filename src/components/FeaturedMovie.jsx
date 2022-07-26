export function FeaturedMovie({ item }) {

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
          className="w-[inherit] h-[inherit] flex flex-col justify-center pl-8 pb-36 pt-16"
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
          <div className="mt-4 md:text-xl text-sm max-w-full mr-7 text-gray-400 md:max-w-[40%]">
            {description}
          </div>
          <div className="mt-4 flex gap-3 items-center">
            <a
              href="#"
              className="font-bold py-3 px-6 rounded md:text-xl text-base bg-white text-black hover:opacity-70 transition-colors"
            >
              ▶ Assistir
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-all font-bold py-3 px-6 rounded md:text-xl text-base bg-[#333] text-white"
            >
              + Minha Lista
            </a>
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
