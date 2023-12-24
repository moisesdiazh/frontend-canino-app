import React from 'react';
import tarjeta from '../../assets/gaby.jpg'; // Reemplaza con la ruta correcta de la imagen
import { Link } from 'react-router-dom';

const AfiliadoTarjeta = () => {
  return (
    <div className="card-haste-premium-card">
      {/* <img src={tarjeta} className="card-img-top" alt="Haste Premium" /> */}
      <div className="card-body">
        <p className="card-text">¿Deseas ofrecer tus servicios? Hazte Premium</p>
        <Link to="RegistroAfiliado" className="btn btn-primary">
          Registrarte
        </Link>
      </div>
    </div>
  );
};

export default AfiliadoTarjeta;