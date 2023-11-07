import { useState, useEffect } from "react";

export function MainBackground({ theme }) {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const headerHeight = document.querySelector('.header').offsetHeight;
  
      // Calculate the opacity based on scroll position
      const opacity = 1 - (scrollTop / headerHeight);
  
      setScrollOpacity(opacity);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className={`main-bg ${theme}`} style={{ opacity: scrollOpacity }}>
    </div>
  );
}
