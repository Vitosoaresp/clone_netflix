import { useContext } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { context } from "../context/NetflixContext";

export function MyList() {

  const { myList } = useContext(context);

  return (
    <>
      <Header />
      <main className="w-full mt-20 px-6">
        { myList.length && <h2 className="text-4xl font-bol my-10 px-3">Minha Lista</h2>}
        {myList.length ? myList.map(movie => (
          <div key={movie.id} className="inline-block w-[300px] cursor-pointer">
            <img
              src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
              alt={movie.original_title}
              className="w-full h-[150px] object-fill  transform scale-[0.9] hover:scale-[1] transition-all duration-200 ease-in "
            />
          </div>
        )) : (
          <div className="h-screen font-semibold text-center text-lg">
            Nenhum filme ou série adicionado á sua lista.
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};