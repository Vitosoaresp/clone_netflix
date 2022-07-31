import { Link } from "react-router-dom";
import logo from '../assest/logo.png';
import { Profiles } from "../service/Profiles";

export function Profile() {
  return (
    <>
      <div className="ml-10 pt-5">
        <img src={logo} alt="" width="100px" />
      </div>
      <main className="flex flex-col -mt-5 justify-center items-center w-full h-screen">
        <h2 className="md:text-4xl text-2xl">Quem está assistindo ?</h2>
        <div className="flex md:gap-4 gap-2 justify-center py-5 flex-wrap w-full">
          {Profiles.map(profile => (
            <button key={profile.id} type="button" className="md:w-24 w-20 flex flex-col items-center">
              <img src={profile.image} alt={profile.nome} />
              <p className="text-sm md:text-base">{profile.nome}</p>
            </button>
          ))}
        </div>
        <Link
          to="/browser"
          className="bg-white hover:bg-red-600 transition-colors text-black hover:text-white font-normal text-base py-1 px-4 rounded-lg"
        >
          D O N E
        </Link>
      </main>
    </>
  )
}