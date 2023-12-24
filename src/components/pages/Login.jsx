import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/login.css';
import icono from '../../assets/icono2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "./Registro"
import ResetPass from './ResetPass';//Import the PasswordResetForm component
import axios from 'axios';
import Alert from "../alerts/Alert";



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});

  const afiliacionToken = localStorage.getItem('afiliado');
  const [afiliacion, setAfiliacion] = useState({});

  const navigate = useNavigate();

  const {msg} = alert;



  const handleLogin = async (e) => {

    e.preventDefault();

    if([email, password].includes('')){ //validacion por si se encuentra vacio
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true
      });
      return
    }

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

    
      // Verificar si la respuesta tiene datos (usuarios autenticados)
      if (response['data'][0]['email'] !== '') {

        localStorage.setItem("token", response['data'][0]['id']);
        navigate('/Panel/panelInicio');
        console.log('Inicio de sesión exitoso:', response.data);
        setAlert({})
      }
    } catch (error) {
      setAlert({
        msg: "Email o contraseña incorrecta",
        error: true
      })
    }
  };


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


        <form id="formLogin">
          <img className="" src={icono} alt="" width="310" height="310" />

          {msg && <Alert alert={alert} />}


          <div className="form-floating">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" name="email" placeholder="Email" />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating">
            <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" name="password" placeholder="Password" />
            <label htmlFor="password">Contraseña</label>
          </div>

          <button onClick={handleLogin} className="w-100 btn btn-lg btn-primary">Iniciar sesión</button>


          {/* <Link to="/Panel" className="w-100 btn btn-lg btn-primary">Ingresar</Link> */}

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



  