import { NavLink } from 'react-router-dom';


const Header = () => {
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
