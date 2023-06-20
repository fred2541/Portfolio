import { useState, useEffect } from "react";

export const useHeaderGetSize = () => {
  const [headerHeigth, setheaderHeigth] = useState(0);

  useEffect(() => {
    // init header heigth
    setheaderHeigth(document.querySelector("nav").clientHeight);
  }, []);

  useEffect(() => {
    const handleResize = () =>
      setheaderHeigth(document.querySelector("nav").clientHeight);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize); // Adjust size after full load of page
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);
  return headerHeigth;
};

export const useHeaderUpdate = (headerHeight) => {
  useEffect(() => {
    const background = document.querySelector(".background");
    const hero = document.querySelector(".hero");

    background.style.minHeight = "calc(100vh - " + headerHeight + "px)";
    hero.style.minHeight = "calc( 100vh - " + headerHeight + "px )";

    document.querySelector("header").style.height = headerHeight + "px";
  }, [headerHeight]);
};
