// Importa las librerías necesarias y los estilos
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Alert from "../alerts/Alert";
import { useNavigate } from 'react-router-dom';

const RegistroDog = () => {

  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    usuario: token,
    raza: '',
    nombreCanino: '',
    edad: 1,
    chip: '',
    peso: 1,
    tamanno: '',
    actividad: '',
    sexo: ''
  });


  const [razas, setRazas] = useState([]);


  const [alert, setAlert] = useState({});


  const navigate = useNavigate();

  const {msg} = alert;



  useEffect(() => {
    axios.get('http://localhost:8080/api/razas', { maxRedirects: 5 })
    .then(response => {
      setRazas(response.data)
    })
    .catch(error => {
      console.error('Error al obtener razas:', error);
    });

  }, []); 

  

  // Función para manejar el cambio en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      if([formData.usuario, formData.raza, formData.nombreCanino, formData.edad, formData.chip, formData.tamanno, formData.actividad, formData.sexo].includes('')){ //validacion por si se encuentra vacio
        setAlert({
          msg: "Todos los campos son obligatorios",
          error: true
        });
        return
      }

      const response = await fetch('http://localhost:8080/api/add-perro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/Panel/RegistroDog');
        setAlert({
          msg: "Su mascota fue registrada satisfactoriamente",
          error: false
        })
      }

      if (!response.ok) {
        navigate('/Panel/RegistroDog');
        setAlert({
          msg: "Su mascota ya se encuentra registrada",
          error: true
        })
      }
      
      
    } catch (error) {

      setAlert({
        msg: "Su mascota ya se encuentra registrada",
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
                <label htmlFor="nombreCanino" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombreCanino"
                  name="nombreCanino"
                  value={formData.nombreCanino}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
            
             
              <div className="col-md-6 position-relative">
                <label htmlFor="raza" className="form-label">Raza</label>
                <select
                  className="form-select"
                  id="raza"
                  name="raza"
                  value={formData.raza}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una raza</option>
                  {razas.map(raza => (
                    <option key={raza.id} value={raza.id}>
                      {raza.nombreRaza}
                    </option>
                  ))}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              
              <div className="col-md-6 position-relative">
                <label htmlFor="tamanno" className="form-label">Tamaño</label>
                <select
                  className="form-select"
                  id="tamanno"
                  name="tamanno"
                  value={formData.tamanno}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  <option value="Pequeño">Pequeño</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                  <option value="Gigante">Gigante</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="actividad" className="form-label">Nivel de Actividad</label>
                <select
                  className="form-select"
                  id="actividad"
                  name="actividad"
                  value={formData.actividad}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una nivel de actividad</option>
                  <option value="Tranquilo">Tranquilo</option>
                  <option value="Nedio">Medio</option>
                  <option value="Activo">Activo</option>

                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="sexo" className="form-label">Sexo</label>
                <select
                  className="form-select"
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un sexo</option>
                  <option value="Macho">Macho</option>
                  <option value="Hembra">Hembra</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                  type="number"
                  className="form-control"
                  id="edad"
                  name="edad"
                  value={formData.edad}
                  onChange={handleInputChange}
                  min={1}
                  required
                />
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="nombreCanino" className="form-label">Chip</label>
                <input
                  type="text"
                  className="form-control"
                  id="chip"
                  name="chip"
                  value={formData.chip}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="edad" className="form-label">Peso</label>
                <input
                  type="number"
                  className="form-control"
                  id="peso"
                  name="peso"
                  value={formData.peso}
                  onChange={handleInputChange}
                  min={1}
                  required
                />
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

          

               {/* ... Repite para los demás campos ... */}
              <div className="col-md-12">
                <button className="btn btn-success" type="submit">Registrar</button>
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
