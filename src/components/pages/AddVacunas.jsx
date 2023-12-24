// Importa las librerías necesarias y los estilos
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Alert from "../alerts/Alert";

const AddVacunas = () => {

  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    perro: '',
    vacuna1: '',
    fecha1: '',
    vacuna2: '',
    fecha2: '',
    vacuna3: '',
    fecha3: ''
  });


  const [vacunas, setVacunas] = useState([]);

  const [perros, setPerros] = useState([]);

  const [alert, setAlert] = useState({});

  const {msg} = alert;

  useEffect(() => {
    axios.get('http://localhost:8080/api/vacunas', { maxRedirects: 5 })
    .then(response => {
      setVacunas(response.data)
    })
    .catch(error => {
      console.error('Error al obtener vacunas:', error);
    });

  }, []); 

  
  useEffect(() => {
    axios.get(`http://localhost:8080/api/perros-user/${token}`, { maxRedirects: 5 })
    .then(response => {
      setPerros(response.data)
    })
    .catch(error => {
      console.error('Error al obtener perros:', error);
    });

  }, [token]); 

  
  // Función para manejar el cambio en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {

      const vacunasData = [
        { perro: formData.perro, vacuna: formData.vacuna1, fechaVacuna: formData.fecha1 },
        { perro: formData.perro, vacuna: formData.vacuna2, fechaVacuna: formData.fecha2 },
        { perro: formData.perro, vacuna: formData.vacuna3, fechaVacuna: formData.fecha3 }
      ];

      console.log(vacunasData);

      const response = await fetch('http://localhost:8080/api/add-vacuna-perro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vacunasData),
      });

    
      setAlert({
          msg: "Las vacunas fueron registradas satisfactoriamente",
          error: false
      })

      
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
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Calendario de Vacunas</span>
            <hr />
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Vacunas</div>
            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>

            {msg && <Alert alert={alert} />}

              {/* Campos del formulario */}
              {/* ... */}
              
              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna1" className="form-label">Mis Mascotas</label>
                <select
                  className="form-select"
                  id="perro"
                  name="perro"
                  value={formData.perro}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una mascota</option>
                  {perros.map(perro => (
                    <option key={perro.id} value={perro.id}>
                      {perro.nombreCanino}
                    </option>
                  ))}
                </select>
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna1" className="form-label">Primera Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna1"
                  name="vacuna1"
                  value={formData.vacuna1}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna</option>
                  {vacunas.map(vacuna => (
                    <option key={vacuna.id} value={vacuna.id}>
                      {vacuna.nombreVacuna}
                    </option>
                  ))}
                </select>
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha1" className="form-label">Fecha de Primera Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha1"
                  name="fecha1"
                  value={formData.fecha1}
                  onChange={handleInputChange}
                  required
                />
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>


              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna2" className="form-label">Segunda Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna2"
                  name="vacuna2"
                  value={formData.vacuna2}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna</option>
                  {vacunas.map(vacuna => (
                    <option key={vacuna.id} value={vacuna.id}>
                      {vacuna.nombreVacuna}
                    </option>
                  ))}
                </select>
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha2" className="form-label">Fecha de Segunda Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha2"
                  name="fecha2"
                  value={formData.fecha2}
                  onChange={handleInputChange}
                  required
                />
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>


              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna3" className="form-label">Tercera Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna3"
                  name="vacuna3"
                  value={formData.vacuna3}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna</option>
                  {vacunas.map(vacuna => (
                    <option key={vacuna.id} value={vacuna.id}>
                      {vacuna.nombreVacuna}
                    </option>
                  ))}
                </select>
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha3" className="form-label">Fecha de Tercera Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha3"
                  name="fecha3"
                  value={formData.fecha3}
                  onChange={handleInputChange}
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

export default AddVacunas;
