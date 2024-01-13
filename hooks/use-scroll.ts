import { useCallback, useEffect, useState } from "react";

export const useScroll = () =>{
  const [y, setY] = useState(0);
  const [ scrollDir, setScrollDir ] = useState('whill')

  const handleNavigation = useCallback(
    (e:any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        // console.log("scrolling up");
        setScrollDir('up')
      } else if (y < window.scrollY) {
        // console.log("scrolling down");
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
  
    return () => { // return a cleanup function to unregister our function since it will run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  return { scrollDir, y }
}