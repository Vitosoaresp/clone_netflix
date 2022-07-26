import { useContext } from 'react';
import logo from '../assest/logo.png';
import profile from '../assest/Profile-avatar.png';
import { context } from '../context/NetflixContext';

export function Header() {

  const { isTransparentHeader } = useContext(context);

  return (
    <header className={`fixed z-20 top-0 left-0 right-0 h-16 flex justify-between items-center px-8 ${isTransparentHeader ? 'bg-transparent' : 'bg-[#141414]'} transition-colors duration-400`}>
      <div className="h-7">
        <a href="#" className="">
          <img src={logo} alt="Netflix" className="max-h-full" />
        </a>
      </div>
      <div className="h-10">
        <a href="#">
          <img src={profile} alt="" className="max-h-full rounded" />
        </a>
      </div>
    </header>
  );
}