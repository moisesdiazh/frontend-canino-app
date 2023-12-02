// Importa las librerías necesarias y los estilos
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegistroDog = () => {
  console.log('Registro');
  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [foto, setfoto] = useState('');
  const [raza, setRaza] = useState('');
  const [tamanno, setTamanno] = useState('');
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [vacuna1, setVacuna1] = useState('');
  const [fecha1, setFecha1] = useState('');
  const [vacuna2, setVacuna2] = useState('');
  const [fecha2, setFecha2] = useState('');
  const [vacuna3, setVacuna3] = useState('');
  const [fecha3, setFecha3] = useState('');
  const [actividad, setActividad] = useState('');
  const [comentario, setComentario] = useState('');
  const [chip, setChip] = useState('');
  

  // Función para manejar el cambio en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado correspondiente
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'foto':
        setfoto(value);
        break;
      case 'raza':
        setRaza(value);
        break;
      case 'tamanno':
        setTamanno(value);
        break;
      case 'sexo':
        setSexo(value);
        break;
      case 'edad':
        setEdad(value);
        break;
      case 'actividad':
        setActividad(value);
        break;
      case 'vacuna1':
        setVacuna1(value);
        break;
      case 'fecha1':
        setFecha1(value);
        break;
      case 'vacuna2':
        setVacuna2(value);
        break;
      case 'fecha2':
        setFecha2(value);
        break;
      case 'vacuna3':
        setVacuna3(value);
        break;
      case 'fecha3':
        setFecha3(value);
        break;
      case 'comentario':
        setComentario(value);
        break;
      case 'chip':
        setChip(value);
        break;
      default:
        break;
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales con los datos ingresados
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
              {/* Campos del formulario */}
              {/* ... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
              {/* Otros campos del formulario... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="foto" className="form-label">Foto</label>
                <input
                  type="file"
                  className="form-control"
                  id="foto"
                  name="foto"
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
             
              <div className="col-md-6 position-relative">
                <label htmlFor="raza" className="form-label">Raza</label>
                <input
                  type="text"
                  className="form-control"
                  id="raza"
                  name="raza"
                  value={raza}
                  onChange={handleInputChange}
                  required
                />
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
                  value={tamanno}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  <option value="zona1">Pequeño</option>
                  <option value="zona2">Mediano</option>
                  <option value="zona2">Grande</option>
                  <option value="zona2">Gigante</option>
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
                  value={actividad}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una nivel de actividad</option>
                  <option value="zona1">Tranquilo</option>
                  <option value="zona2">Medio</option>
                  <option value="zona2">Activo</option>

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
                  value={sexo}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Seleccione un sexo</option>
                  <option value="zona1">Macho</option>
                  <option value="zona2">Hembra</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-12 position-relative">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input
                  type="number"
                  className="form-control"
                  id="edad"
                  name="edad"
                  value={edad}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
              <div className="col-md-6 position-relative">
                <label htmlFor="zona" className="form-label">Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna1"
                  name="vacuna1"
                  value={vacuna1}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna1</option>
                  <option value="zona1">vacuna1</option>
                  <option value="zona2">vacuna2</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha1" className="form-label">Fecha de Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha1"
                  name="fecha1"
                  value={fecha1}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>


              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna2" className="form-label">Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna2"
                  name="vacuna2"
                  value={vacuna2}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna</option>
                  <option value="zona1">vacuna1</option>
                  <option value="zona2">vacuna2</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha2" className="form-label">Fecha de Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha2"
                  name="fecha2"
                  value={fecha2}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>


              <div className="col-md-6 position-relative">
                <label htmlFor="vacuna3" className="form-label">Vacuna</label>
                <select
                  className="form-select"
                  id="vacuna3"
                  name="vacuna3"
                  value={vacuna3}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una vacuna</option>
                  <option value="zona1">vacuna1</option>
                  <option value="zona2">vacuna2</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="fecha3" className="form-label">Fecha de Vacunación</label>
                <input
                  type="date"
                  className="form-control form-control-date"
                  id="fecha3"
                  name="fecha3"
                  value={fecha3}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
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
