import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Nav.css";

export const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to='/'  className="nav__logo">
          <i className="bx bx-last-page"></i>Heroes
        </NavLink>

        <div className={`nav__menu ${menu && "show-menu"}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/marvel"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active-link" : ""}`
                }
                onClick={handleClick}
              >
                Marvel
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/dc"
                className={({ isActive }) =>
                  `nav__link ${isActive ? "active-link" : ""}`
                }
                onClick={handleClick}
              >
                DC
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " active-link" : "")
                }
                onClick={handleClick}
              >
                Search
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x" onClick={handleClick}></i>
          </div>
        </div>

        <div className="nav__btns">
          <span className="nav__user"> name </span>
          <span className="nav__logoud">
            <i className='bx bx-arrow-from-left'onClick={handleLogout}></i>
          </span>
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-grid-alt" onClick={handleClick}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};
