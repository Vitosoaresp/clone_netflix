import { createContext, useEffect, useState } from "react";
import FetchTMDB from "../service/FetchTMDB";
export const context = createContext();

export function NetflixContextProvider({ children }) {
  const [listMovies, setListMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [isTransparentHeader, setIsTransparentHeader] = useState(true);
  const [myList, setMyList] = useState(JSON.parse(localStorage.getItem('myListcloneNetflix')) || []);
  const [movieInDetail, setMovieInDetail] = useState({});

  useEffect(() => {
    const fetchDataMovies = async () => {
      const data = await FetchTMDB.list();
      setListMovies(data);
    };
    fetchDataMovies();

    const scroollListener = () => {
      if (window.scrollY > 100) {
        setIsTransparentHeader(false);
      } else {
        setIsTransparentHeader(true);
      }
    };

    window.addEventListener("scroll", scroollListener);
    return () => {
      window.removeEventListener("scroll", scroollListener);
    };
  }, []);

  useEffect(() => {
    if (listMovies.length > 0) {
      const originals = listMovies.filter(
        category => category.slug === "originals"
      );
      const random = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      const chosen = originals[0].items.results[random];
      const getMovieInfo = async () => {
        const data = await FetchTMDB.fetchMovieInfo(chosen.id, "tv");
        setFeaturedData(data);
      };
      getMovieInfo();
    }
  }, [listMovies]);

  useEffect(() => {
    localStorage.setItem("myListcloneNetflix", JSON.stringify(myList));
  }, [myList]);

  const changeMyList = movieData => {
    const isOnTheList = myList.find(film => film.id === movieData.id);
    if (isOnTheList) {
      const newList = myList.filter(film => film.id !== movieData.id);
      return setMyList(newList);
    }
    setMyList([...myList, { ...movieData }]);
  };

  return (
    <context.Provider
      value={{
        listMovies,
        featuredData,
        isTransparentHeader,
        changeMyList,
        myList,
        movieInDetail,
        setMovieInDetail,
      }}
    >
      {children}
    </context.Provider>
  );
}
