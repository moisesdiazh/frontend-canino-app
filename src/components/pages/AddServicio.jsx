// Importa las librerías necesarias y los estilos
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Alert from "../alerts/Alert";
import { useNavigate } from 'react-router-dom';


const RegistroDog = () => {

  const token = localStorage.getItem('token');

  const afiliado = localStorage.getItem('afiliado');


  const [alert, setAlert] = useState({});
  const navigate = useNavigate();
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

  }, []);

  const [formData, setFormData] = useState({
    comuna: token,
    afiliacion: afiliado,
    nombreServicio: '',
    telefono: '',
    email: '',
    direccion: ''
  });

  const {msg} = alert;

  // Función para manejar el cambio en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      if([formData.comuna, formData.afiliacion, formData.nombreServicio, formData.telefono, formData.email, formData.direccion].includes('')){ 
        setAlert({
          msg: "Todos los campos son obligatorios",
          error: true
        });
        return
      }

      const response = await fetch('http://localhost:8080/api/add-servicio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/Panel/AddServicio');
        setAlert({
          msg: "Su servicio fue registrado satisfactoriamente",
          error: false
        })
      }

      if (!response.ok) {
        navigate('/Panel/AddServicio');
        setAlert({
          msg: "Su servicio ya se encuentra registrado",
          error: true
        })
      }
      
      
    } catch (error) {

      setAlert({
        msg: "Su servicio ya se encuentra registrado",
        error: true
      })
    }
  };

  return (

    <div className="container">

      <div className="row">
        <div className="col">
          <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Formulario de Registro</span>
            <hr />
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Datos Caninos</div>
            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>

            {msg && <Alert alert={alert} />}

              {/* Campos del formulario */}
              {/* ... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="nombreServicio" className="form-label">Nombre del Servicio</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreServicio"
                  name="nombreServicio"
                  value={formData.nombreServicio}
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
                <label htmlFor="comuna" className="form-label">Comuna</label>
                <select
                  className="form-select"
                  id="comuna"
                  name="comuna"
                  value={formData.comuna}
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
                <label htmlFor="email" className="form-label">Correo</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="cprecio" className="form-label">Precio Consulta General</label>
                <input
                  type="number"
                  className="form-control"
                  id="cprecio"
                  name="cprecio"
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="tservicio" className="form-label">Tipo de servicio</label>
                <select
                  className="form-select"
                  id="tservicio"
                  name="tservicio"
                  required
                >
                  <option value="">Selecciona un Servicio</option>
                            <option  value="veterinaria">
                                Veterinaria
                            </option>
                            <option  value="paseador">
                                Paseador de caninos
                            </option>
                            <option value="peluqueria">
                                Peluqueria canina
                            </option>
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
          

               {/* ... Repite para los demás campos ... */}
              <div className="col-md-12">
                <button className="btn btn-primary" type="submit">Registrar</button>
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

export default RegistroDog;
