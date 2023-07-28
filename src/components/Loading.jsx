import logo from '/assest/logo.png';

export function Loading() {
  return (
    <div className="fixed left-0 top-0 z-50 right-0 bottom-0 bg-black flex flex-col justify-center items-center">
      <img src={logo} alt="Logo da Netflix" className="w-60" />
      <img
        src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"
        width="500px"
        alt="carregando..."
      />
    </div>
  );
}
