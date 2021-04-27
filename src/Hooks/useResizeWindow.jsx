import { useEffect, useState } from "react";

const useResizeWindow = () => {
   const [windowWidth, setwindowWidth] = useState(window.innerWidth);

   useEffect(() => {
      const handleResize = () => {
         setwindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return [windowWidth];
};

export default useResizeWindow;
