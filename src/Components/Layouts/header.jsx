import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, useScroll, useAnimation } from "framer-motion"

function Header () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { scrollY } = useScroll();
  const controls = useAnimation();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", () => {
      controls.start({
        transform: ["skewX(0deg)", "skewX(20deg)", "skewX(0deg)", "skewX(40deg)", "skewX(0deg)"],
        transition: { duration: 1, times: [0, 0.25, 0.5, 0.75, 1]}
      });
    });

    return () => {
      unsubscribe();
    };
  }, [controls, scrollY]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  useEffect(() => { // Adjust Logo in JS for no MediaQuery in CSS
    const LogoAile = document.querySelector("nav > a > img:nth-child(2)");
    const LogoText = document.querySelector("nav > a > img:first-child");
    windowWidth < 450 ? LogoAile.style.display = 'none' : LogoAile.style.display = 'block';
    windowWidth < 450 ? LogoText.style.width = '100%' : LogoText.style.width = '70%';
  }, [windowWidth]);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">
          <img src="/Assets/Images/Logo/Logo_Texte.png" alt="Logo FredDev" />
          <motion.img animate={controls} src="/Assets/Images/Logo/Logo_Aile.png" alt="Logo FredDev"/>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio" activeclassname="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" activeclassname="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
