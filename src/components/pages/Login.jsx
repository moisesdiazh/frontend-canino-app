import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css';
import icono from '../../assets/icono2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./Registro"
import ResetPass from './ResetPass';//Import the PasswordResetForm component

const Login = () => {
  const [showPasswordResetModal, setShowPasswordResetModal] = useState(false); // State variable for password reset modal

  const handlePasswordResetClick = () => {
    setShowPasswordResetModal(true); // Open password reset modal
  };

  const handlePasswordResetModalClose = () => {
    setShowPasswordResetModal(false); // Close password reset modal
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="d-flex align-items-center">
          <Link to="/" className="navbar-brand ms-4 ms-lg-0">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.5em', color: '#DEE2FB', marginRight: '15px' }} />
            <span style={{ color: '#0D6EFD', fontSize: '1.5em', fontWeight: 'bold' }}>Inicio</span>
          </Link>
        </div>
      </nav>

      <main className="form-signin text-center shadow-lg p-3 mb-5">
        <form id="formLogin" action="/login" method="POST">
          <img className="mb-4" src={icono} alt="" width="310" height="310" />

          <div className="form-floating">
            <input type="text" className="form-control" id="user" name="user" placeholder="User" />
            <label htmlFor="user">Correo</label>
          </div>

          <div className="form-floating">
            <input type="password" className="form-control" id="pass" name="pass" placeholder="Password" />
            <label htmlFor="pass">Contraseña</label>
          </div>

          <Link to="/Panel" className="w-100 btn btn-lg btn-primary">Ingresar</Link>

          <br /><br />

        </form>

        <Link to="/registro" className="w-100 btn btn-lg btn-dark">Registrarse</Link>
        <Link to="#" onClick={handlePasswordResetClick} className="w-100 btn btn-lg btn-link">¿Olvidaste tu contraseña?</Link>

        {showPasswordResetModal && ( // Only render modal if open
          <ResetPass show={showPasswordResetModal} onHide={handlePasswordResetModalClose} />
        )}
      </main>
    </div>
  );
};

export default Login;



  