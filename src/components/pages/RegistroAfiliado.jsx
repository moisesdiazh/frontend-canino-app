// Importa las librerías necesarias y los estilos
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RegistroAfiliado = () => {
  console.log('Registro');
  // Estados para los campos del formulario
  const [nombreServ, setNombre] = useState('');
  const [servicio, setServicio] = useState('');
  const [correoServ, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [precio, setPrecio] = useState('');
  const [foto, setFoto] = useState('');
  const [detalle, setDetalle] = useState('');
  const [zona, setZona] = useState('');
  const [region, setRegion] = useState('');
  const [comuna, setComuna] = useState('');
  const [direccion, setDireccion] = useState('');

  // Función para manejar el cambio en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Actualiza el estado correspondiente
    switch (name) {
      case 'nombre':
        setNombre(value);
        break;
      case 'servicio':
        setServicio(value);
        break;
      case 'correo':
        setCorreo(value);
        break;
      case 'telefono':
        setTelefono(value);
        break;
      case 'precio':
        setPrecio(value);
        break;
      case 'foto':
        setFoto(value);
        break;
      case 'detalle':
        setDetalle(value);
        break;
      case 'zona':
        setZona(value);
        break;
      case 'region':
        setRegion(value);
        break;
      case 'comuna':
        setComuna(value);
        break;
      case 'direccion':
        setDireccion(value);
        break;
      default:
        break;
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado');
    // Aquí puedes realizar acciones adicionales con los datos ingresados
  };

  return (

    <div className="container">

      <div className="row">
        <div className="col">
          <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Formulario de Afiliados</span>
            <hr />
            <div className="p-3 mb-2 bg-primary bg-gradient fw-bold text-white">Datos del Negocio</div>
            <form onSubmit={handleSubmit} className="row g-3 needs-validation" noValidate>
              {/* Campos del formulario */}
              {/* ... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Nombre de fantasia</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name="nombre"
                  value={nombreServ}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>
              {/* Otros campos del formulario... */}
              <div className="col-md-6 position-relative">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="servicio"
                  name="servicio"
                  value={setServicio}
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
                  value={setCorreo}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Telefono</label>
                <input
                  type="text"
                  className="form-control"
                  id="telefono"
                  name="telefono"
                  value={setTelefono}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Precio Consulta General</label>
                <input
                  type="text"
                  className="form-control"
                  id="precio"
                  name="precio"
                  value={setPrecio}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Agregar Foto </label>
                <input
                  type="text"
                  className="form-control"
                  id="foto"
                  name="foto"
                  value={setFoto}
                  onChange={handleInputChange}
                  required
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
                  value={setRegion}
                  onChange={handleInputChange}
                  required
                />
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="nombre" className="form-label">Comuna</label>
                <select
                  className="form-select"
                  id="comuna"
                  name="comuna"
                  value={setComuna}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  <option value="zona1">Zona 1</option>
                  <option value="zona2">Zona 2</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe completar los datos.</div>
              </div>

              <div className="col-md-6 position-relative">
                <label htmlFor="zona" className="form-label">Zona</label>
                <select
                  className="form-select"
                  id="zona"
                  name="zona"
                  value={setZona}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecciona una zona</option>
                  <option value="zona1">Zona 1</option>
                  <option value="zona2">Zona 2</option>
                  {/* Añade más opciones según sea necesario */}
                </select>
                {/* Mensajes para validación */}
                <div className="valid-tooltip">¡Campo válido!</div>
                <div className="invalid-tooltip">Debe seleccionar una zona.</div>
              </div>

              

               {/* ... Repite para los demás campos ... */}
              <div className="col-md-12">
              <button onClick={handleSubmit} className="btn btn-success" type="submit">
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

export default RegistroAfiliado;
