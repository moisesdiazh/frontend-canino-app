import React from 'react';
import tarjeta from '../../assets/gaby.jpg'; // Reemplaza con la ruta correcta de la imagen
import { Link } from 'react-router-dom';

const AfiliadoTarjeta = () => {
  return (
    <div className="card-haste-premium-card">
      <img src={tarjeta} className="card-img-top" alt="Haste Premium" />
      <div className="card-body">
        <p className="card-text">Crea tu cuenta de Prestador de Servicio.</p>
        <Link to="RegistroAfiliado" className="btn btn-primary">
          Registrarte
        </Link>
      </div>
    </div>
  );
};

export default AfiliadoTarjeta;