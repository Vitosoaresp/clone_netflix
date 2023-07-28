import { Create } from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../assest/logo.png';
import ProfilesContext from "../context/ProfilesContext";

export function Profile() {
  const { profiles, handleChangeProfile, selectedProfile } = useContext(ProfilesContext);
  return (
    <>
      <div className="ml-10 pt-5">
        <img src={logo} alt="" width="100px" />
      </div>
      <main className="flex flex-col gap-6 justify-center items-center w-full px-10 py-72">
        <h2 className="md:text-5xl text-2xl">Quem está assistindo ?</h2>
        <div className="flex gap-6 justify-center  px-6 py-5 flex-wrap w-full">
          {profiles.map(profile => (
            <div
              key={profile.id}
              onClick={() => handleChangeProfile(profile.id)}
              className="md:w-28 w-24 gap-2 flex flex-col items-center p-1 cursor-pointer"
            >
              <img src={profile.image} alt={profile.nome} className={`${selectedProfile.id === profile.id ? 'border-white' : 'border-none'} border-[3px]`} />
              <p className="text-sm md:text-base">{profile.nome}</p>
              {selectedProfile.id === profile.id &&
                <button disabled className="border border-white rounded-full p-1 cursor-not-allowed md:mt-5">
                  <Create />
                </button>}
            </div>
          ))}
        </div>
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 transition-colors text-white font-normal text-base py-1 px-4 rounded-lg"
        >
          DONE
        </Link>
      </main>
    </>
  )
}