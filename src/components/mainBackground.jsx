import { useState, useEffect } from "react";
import Background from "../assets/background.svg";

export function MainBackground({ theme }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Function to be called when scroll event occurs
    const handleScroll = () => setScrollY(window.pageYOffset);

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      // Remove event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  return (
    <div className="background">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlnsSvg="http://svgjs.dev/svgjs"
        viewBox="0 0 1100 1100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="pppixelate-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform={`translate(${-82 + (scrollY /10)} ${-68 + (scrollY /10)}) scale(3.3) rotate(37)`}
            shape-rendering="crispEdges"
          >
            <rect
              width="1"
              height="1"
              x="5"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="6"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="7"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="7"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="7"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="7"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="8"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="8"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="8"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="8"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="9"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="9"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="3"
              y="10"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="16"
              y="10"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="4"
              y="11"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="15"
              y="11"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="5"
              y="12"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="14"
              y="12"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="6"
              y="13"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="13"
              y="13"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="7"
              y="14"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="12"
              y="14"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="8"
              y="15"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="11"
              y="15"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="9"
              y="16"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
            <rect
              width="1"
              height="1"
              x="10"
              y="16"
              fill="hsla(30, 85%, 27%, 0.365)"
            ></rect>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pppixelate-pattern)"></rect>
      </svg>
    </div>
  );
}
