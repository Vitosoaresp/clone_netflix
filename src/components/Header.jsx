import { ArrowDropDownRounded, Close, Notifications, SearchOutlined } from '@material-ui/icons';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assest/logo.png';
import profile from '../assest/profile1.png';
import { context } from '../context/NetflixContext';

export function Header() {

  const [isVisibleInput, setIsVisibleInput] = useState(false);
  const { isTransparentHeader } = useContext(context);

  return (
    <header className={`fixed z-20 top-0 left-0 right-0 h-16 flex justify-between items-center px-8 ${isTransparentHeader ? 'bg-transparent' : 'bg-[#141414]'} transition-colors duration-400`}>
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
      <div className="h-10 flex items-center gap-3 w-1/2 justify-end">
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
        <div className="flex items-center group cursor-pointer">
          <img src={profile} alt="" className="w-10 rounded" />
          <ArrowDropDownRounded fontSize="large" className="group-hover:rotate-180 transition-all duration-500" />
        </div>
      </div>
    </header>
  );
}