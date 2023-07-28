import { createContext, useEffect, useState } from "react";

const VisibilityHeaderContext = createContext({
  isTransparentHeader: true,
});

export const VisibilityHeaderContextProvider = ({ children }) => {
  const [isTransparentHeader, setIsTransparentHeader] = useState(true);

  useEffect(() => {
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

  return (
    <VisibilityHeaderContext.Provider value={{ isTransparentHeader }}>
      {children}
    </VisibilityHeaderContext.Provider>
  )
};

export default VisibilityHeaderContext;
