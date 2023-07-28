import { ArrowDropDownRounded, Close, Notifications, SearchOutlined } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import ProfilesContext from '../context/ProfilesContext';
import VisibilityHeaderContext from '../context/visibilityHeaderContext';

export function Header() {
  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const { selectedProfile } = useContext(ProfilesContext);
  const { isTransparentHeader } = useContext(VisibilityHeaderContext);

  return (
    <header className={`fixed z-20 top-0 left-0 right-0 h-16 flex justify-between items-center px-3 md:px-8 ${isTransparentHeader ? 'bg-transparent' : 'bg-[#141414]'} transition-colors duration-400`}>
      <div className="h-7 flex items-center gap-10">
        <a href="#" className="w-[100px]">
          <img src={logo} alt="Netflix" className="max-h-full" />
        </a>
        <nav className="font-bold text-base md:gap-10 gap-2 md:flex hidden items-center ">
          <Link to="/">Início</Link>
          <a href="">Séries</a>
          <a href="">Filmes</a>
          <Link to="/myList">Minha Lista</Link>
        </nav>
      </div>
      <div className="h-10 flex items-center gap-3 w-1/2 justify-end md:px-4">
        {isVisibleInput ? (
          <label htmlFor="search" className="flex relative items-center">
            <input type="text" className="w-24 md:w-52 rounded text-smoky-black pl-1 md:pl-4" id="search" />
            <Close
              className="text-black absolute right-0 cursor-pointer"
              onClick={() => setIsVisibleInput(false)}
            />
          </label>
        ) : (
          <SearchOutlined
            fontSize="medium"
            className="cursor-pointer"
            onClick={() => setIsVisibleInput(true)}
          />
        )}
        <span className="hidden md:inline">
          <Notifications fontSize="medium" className="cursor-pointer" />
        </span>

        <button
          className="flex items-center group cursor-pointer relative group"
        >
          <img src={selectedProfile.image} alt="" className="w-10 rounded" />
          <ArrowDropDownRounded fontSize="large" className="group-hover:rotate-180 transition-all duration-500" />
          <div
            className='absolute top-10 left-1/2 -translate-x-1/2 bg-[#141414] group-hover:flex transition-opacity duration-500 z-30 hidden opacity-0 group-hover:opacity-100 hover:opacity-100 p-4 hover:flex rounded shadow'
          >
            <div className='flex flex-col gap-1 items-stretch font-semibold'>
              <Link to="/profile" className='text-left'>Perfil</Link>
              <div className='text-left'>Configurações</div>
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}