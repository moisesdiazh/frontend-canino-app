import React from 'react';
import '../style/app.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row row-cols-lg-4 row-cols-md-2 mb-5">
          <div className="col mb4">
            <h4 className="text-white">Contacto</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker-alt me-3"></i> Santiago, Región Metropolitana</li>
              <li><i className="fa fa-phone-alt me-3"></i> 935 158765</li>
              <li><i className="fa fa-envelope me-3"></i> info@caniConecta.com</li>
            </ul>
          </div>

          <div className="col mb-4">
            <h4 className="text-white">Redes Sociales</h4>
            <ul className="list-unstyled">
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Twitter</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Facebook</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">YouTube</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">TikTok</a></li>
            </ul>
          </div>

          <div className="col mb-4">
            <h4 className="text-white">Información</h4>
            <ul className="list-unstyled">
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Preguntas Frecuentes</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Obtener mayor visibilidad</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Ley Cholito</a></li>
            </ul>
          </div>

          <div className="col mb-4">
            <h4 className="text-white">Servicios</h4>
            <ul className="list-unstyled">
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Terminos y Condiciones</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Paseo a tu medida</a></li>
              <li><a className="btn btn-link" href="https://www.google.com/?gws_rd=ssl">Veterinarias</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;