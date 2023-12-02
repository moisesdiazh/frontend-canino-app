import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../style/app.css';
import { Link } from 'react-router-dom';



function Navbar2() {
  return (
    <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small><i className="fa fa-map-marker-alt text-primary me-2"></i>Santiago, Región Metropolitana</small>
        </div>
        <div className="col-lg-6 px-5 text-end">
        <Link to ="./Login"  className="btn btn-primary py-6 px-6 animated slideInDown">Ingresar</Link>
          
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s ">
      <Link to="/" className="navbar-brand ms-4 ms-lg-0"><h1 className="display-5 text-primary m-0">CaniConecta</h1></Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <a href="index.html" className="nav-item nav-link active">Inicio</a>
            <a href="about.html" className="nav-item nav-link">Sobre Nosotros</a>
            <a href="service.html" className="nav-item nav-link">Servicios</a>
            <div className="nav-item dropdown">
              <a href="https://www.google.com/?gws_rd=ssl" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Información</a>
              <div className="dropdown-menu border-light m-0">
                <a href="project.html" className="dropdown-item">texto1</a>
                <a href="feature.html" className="dropdown-item">texto2</a>
                <a href="team.html" className="dropdown-item">texto3</a>
                <a href="testimonial.html" className="dropdown-item">texto4</a>
                <a href="404.html" className="dropdown-item">texto5</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contacto</a>
          </div>
          {/*
          <div className="d-none d-lg-flex ms-2">
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small className="fab fa-facebook-f text-primary"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small className="fab fa-twitter text-primary"></small>
            </a>
            <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
              <small className="fab fa-linkedin-in text-primary"></small>
            </a>
          </div> */ }
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
