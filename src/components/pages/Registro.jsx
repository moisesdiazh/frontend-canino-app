import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    password: '',
    cpassword: '',
    region: 'Region Metropolitana',
    comuna: '',
    direccion: '',
  });

  const [comunas, setComunas] = useState([]);

  useEffect(() => {
    // Hacer la solicitud al endpoint de comunas usando Axios
    axios.get('http://localhost:8080/api/comunas', { maxRedirects: 5 })
    .then(response => {
      setComunas(response.data)
    })
    .catch(error => {
      console.error('Error al obtener comunas:', error);
    });

  }, []); // Se ejecuta solo una vez al montar el componente


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente');
      } else {
        console.error('Error al registrar usuario:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error de red o del lado del cliente:', error);
    }

    console.log("Formulario enviado");
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="d-flex align-items-left">
          <Link to="/" className="navbar-brand ms-4 ms-lg-0 d-flex align-items-center">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.5em', color: '#DEE2FB', marginRight: '10px' }} />
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Inicio</span>
          </Link>
        </div>
      </nav>
      <div className="row">
        <div className="col">
          <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Formulario de Registro</span>
            <hr />
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Datos Personales</div>
            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
              {/* Campos del formulario */}
              {/* ... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
              {/* Otros campos del formulario... */}
              {/* ... Repite para los demás campos ... */}

              <div className="col-md-6 position-relative">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
             
              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]+" 
                  minLength="9" // Mínimo de 9 dígitos
                  maxLength="15" // Máximo de 15 dígitos (ajústalo según tus necesidades)
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Región</label>
                <input
                  type="text"
                  className="form-control"
                  id="region"
                  name="region"
                  value ="Region Metropolitana"
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              {/* <div className="col-md-6 position-relative">
                <label htmlFor="zona" className="form-label">Zona</label>
                <select
                  className="form-select"
                  id="zona"
                  name="zona"
                  value={formData.zona}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  <option value="zona1">Zona Norte</option>
                  <option value="zona2">Zona Oriente</option>
                  <option value="zona3">Zona Poniente</option>
                  <option value="zona4">Zona Sur</option>
                  <option value="zona5">Zona Centro</option>
                </select>
                
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div> */}

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Comuna</label>
                <select
                  className="form-select"
                  id="comuna"
                  name="comuna"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una comuna</option>
                  {comunas.map(comuna => (
                    <option key={comuna.id} value={comuna.id}>
                      {comuna.nombreComuna}
                    </option>
                  ))}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>


              <div className="col-md-6 position-relative">
                <label htmlFor="direccion" className="form-label">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  name="direccion"
                  value={formData.direccion}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              

              <div className="col-md-6 position-relative">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="cpassword" className="form-label">Confirma Contraseña</label>
                <input
                  type="text"
                  className="form-control"
                  id="cpassword"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-12">
                <button className="btn btn-success" type="submit">
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Bootstrap Bundle con Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </div>
  );
}

export default Registro;
