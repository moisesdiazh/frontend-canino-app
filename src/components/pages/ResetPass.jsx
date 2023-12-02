import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ResetPass = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    // Aquí puedes agregar la lógica para enviar el correo o simplemente mostrar un alert
    alert('Correo enviado con las instrucciones de restablecimiento de contraseña');
    handleClose(); // Cerrar el modal después de hacer clic en Restablecer
  };

  return (
    <Modal show={isModalOpen} onHide={handleClose} backdrop="static" keyboard={true}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Reinicio de Contraseña</h5>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Ingrese tu dirección de correo electrónico y te enviaremos un correo electrónico con instrucciones para restablecer tu contraseña
            </p>
            <div className="form-outline">
              <input type="email" placeholder='Ingrese Correo' id="typeEmail" className="form-control my-3" />
            </div>
            <button className="btn btn-primary w-100" onClick={handleReset}>
              Restablecer
            </button>
          </div>
          <div className="modal-footer">
            <button onClick={handleClose} className="btn btn-link" style={{ textDecoration: 'none' }}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ResetPass;
