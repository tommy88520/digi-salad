import { useCallback, useEffect, useState } from "react";

export const useScroll = () =>{
  const [y, setY] = useState(0);
  const [ scrollDir, setScrollDir ] = useState('whill')

  const handleNavigation = useCallback(
    (e:any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollDir('up')
      } else if (y < window.scrollY) {
        setScrollDir('down')
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
  }, []);
  
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  
    return () => { 
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return { scrollDir, y }
}