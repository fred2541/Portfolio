import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => { // Adjust Logo in JS for no MediaQuery in CSS
    const LogoAile = document.querySelector("nav > a > img:last-child");
    const LogoText = document.querySelector("nav > a > img:first-child");
    windowWidth < 450 ? LogoAile.style.display = 'none' : LogoAile.style.display = 'block';
    windowWidth < 450 ? LogoText.style.width = '100%' : LogoAile.style.width = '70%';
  }, [windowWidth]);

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">
          <img src="/Assets/Images/Logo/Logo_Texte.png" alt="Logo FredDev" />
          <img src="/Assets/Images/Logo/Logo_Aile.png" alt="Logo FredDev" />
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
