// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          {/* Cambiar el título del Navbar a "Supermercado Patito" */}
          <Link className="navbar-brand text-white" to="/inicio">
            Supermercado Patito
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/inicio">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/categoria">
                  Categoría
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Más enlaces
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item text-dark" to="/sucursal">
                      Sucursal
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/creditos">
                      Créditos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/negocios">
                      Negocios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/quienes-somos">
                      Quiénes Somos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/shopping">
                      Compras
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
