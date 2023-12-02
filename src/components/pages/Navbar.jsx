import React from "react";
import icono from '../../assets/logoNav.svg';
import avatar from '../../assets/avatar2.png'; // Asegúrate de tener la ruta correcta
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarPanel d-flex justify-content-between align-items-center">
      <div>
        <img className="mb-4" src={icono} alt="" width="175" height="60" />
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={avatar}
                className="rounded-circle"
                height="42"
                alt="Avatar"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Mi Perfil
                </a>
              </li>
              <li>
              
                <Link to="/" className="btn btn-link" style={{textDecoration: 'none'}}>Salir</Link>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
 
export default Navbar;
