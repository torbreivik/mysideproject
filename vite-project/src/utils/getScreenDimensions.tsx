import { useState, useEffect } from "react";

export const getScreenDimensions = () => {
  // Initial values
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function - removing the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  return dimensions;
};
