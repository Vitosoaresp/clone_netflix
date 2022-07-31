const API_BASE = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const baseFetch = async endpoint => {
  const request = await fetch(`${API_BASE}${endpoint}`);
  const data = await request.json();
  return data;
};

export default {
  list: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await baseFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await baseFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await baseFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await baseFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await baseFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await baseFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await baseFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentário',
        items: await baseFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  fetchMovieInfo: async (id, type) => {
    let info = {};
    if (id) {
      switch (type) {
        case 'movie':
          info = await baseFetch(
            `/movie/${id}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case 'tv':
          info = await baseFetch(`/tv/${id}?language=pt-BR&api_key=${API_KEY}`);
          break;
        default:
          info = null;
          break;
      }
    }
    return info;
  },
  fetchMovieTrailer: async id => {
    const request = await fetch(
      `${API_BASE}/tv/${id}/videos?language=pt-BR&api_key=${API_KEY}`
    );
    const data = await request.json();
    return data;
  },
};
