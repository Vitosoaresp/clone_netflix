import { createContext, useEffect, useState } from "react";
import FetchTMDB from "../service/FetchTMDB";
export const context = createContext();

export function NetflixContextProvider({ children }) {
  const [listMovies, setListMovies] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [myList, setMyList] = useState([]);
  const [movieInDetail, setMovieInDetail] = useState(undefined);

  const getListToStorage = () => {
    const list = localStorage.getItem("myListcloneNetflix");
    const parsedList = list ? JSON.parse(list) : [];
    setMyList(parsedList);
  }

  useEffect(() => {
    const fetchDataMovies = async () => {
      const data = await FetchTMDB.list();
      setListMovies(data);
    };
    fetchDataMovies();
    getListToStorage();
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
