// Importa las librerías necesarias y los estilos
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Alert from "../alerts/Alert";

const RegistroAfiliado = () => {
  
  const token = localStorage.getItem('token');

  const [alert, setAlert] = useState({});

  const navigate = useNavigate();

  const {msg} = alert;

  const userAfiliacion = {
    usuario: token
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if([token].includes('')){ //validacion por si se encuentra vacio
        setAlert({
          msg: "Error, debe salir de la aplicación y volver a loguearse, en caso de tener el mismo error debe comunicarse con Soporte de CaniConecta",
          error: true
        });
        return
      }

      const response = await fetch('http://localhost:8080/api/add-afiliacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userAfiliacion),
      });

      

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("afiliado", data['id']);
        navigate('/Panel/PanelInicio');
        
      }
      

      if (!response.ok) {
        navigate('/Panel/RegistroAfiliado');
        setAlert({
          msg: "Ya se encuentra afiliado a nuestra aplicación",
          error: true
        })
      }
      
    } catch (error) {

      setAlert({
        msg: "Ya se encuentra afiliado a nuestra aplicación",
        error: true
      })
    }
  };  

  return (

    <div className="container">

      <div className="row">
        <div className="col">
          <div className="shadow-lg p-3 mb-5 mt-4 bg-body rounded">
            <span className="display-5 text-primary m-0" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>Términos y Condiciones del Programa de Afiliados</span>
            <hr />

            <div className="container">
            {msg && <Alert alert={alert} />}

              <h3>Bienvenido al Programa de Afiliados de CaniConecta</h3>
              <p>Al unirte a nuestro programa, aceptas cumplir con los siguientes términos y condiciones:</p>

              <ol>
                  <li>
                      <h5>Elegibilidad:</h5>
                      <p>a. Para participar en el programa de afiliados, debes tener al menos 18 años.</p>
                      <p>b. Nos reservamos el derecho de aceptar o rechazar solicitudes de afiliación a nuestra entera discreción.</p>
                  </li>

                  <li>
                      <h5>Inscripción en el Programa:</h5>
                      <p>a. Debes completar el formulario de inscripción con información precisa y actualizada.</p>
                      <p>b. Nos reservamos el derecho de revisar y aprobar todas las solicitudes de afiliación.</p>
                  </li>

                  <li>
                      <h5>Responsabilidades del Afiliado:</h5>
                      <p>a. Como afiliado, te comprometes a promocionar nuestros productos/servicios de manera ética y legal.</p>
                      <p>b. No se permite el uso de métodos de marketing engañosos, spam o cualquier actividad que pueda dañar la reputación de la plataforma.</p>
                  </li>

                  <li>
                      <h5>Comisiones y Pagos:</h5>
                      <p>a. Te pagaremos comisiones por las ventas generadas a través de tus enlaces de afiliado, de acuerdo con la estructura de comisiones establecida.</p>
                      <p>b. Los pagos se realizarán mensualmente y estarán sujetos a umbral mínimo de [monto].</p>
                  </li>

                  <li>
                      <h5>Uso de Enlaces de Afiliados:</h5>
                      <p>a. Se te proporcionarán enlaces de afiliados únicos. Es tu responsabilidad garantizar que estos enlaces se utilicen correctamente.</p>
                      <p>b. No se permite la manipulación de enlaces para obtener comisiones de manera fraudulenta.</p>
                  </li>

                  <li>
                      <h5>Duración y Terminación:</h5>
                      <p>a. El acuerdo de afiliación tiene una duración indefinida, pero cualquiera de las partes puede rescindir el acuerdo en cualquier momento con o sin causa.</p>
                      <p>b. Nos reservamos el derecho de dar por terminada tu participación en el programa si se violan estos términos y condiciones.</p>
                  </li>

                  <li>
                      <h5>Modificaciones:</h5>
                      <p>a. Nos reservamos el derecho de realizar cambios en estos términos y condiciones en cualquier momento. Te notificaremos de cualquier cambio a través de la dirección de correo electrónico proporcionada durante la inscripción.</p>
                  </li>

                  <li>
                      <h5>Confidencialidad:</h5>
                      <p>a. Toda la información confidencial compartida durante la participación en el programa debe ser tratada como tal y no debe divulgarse a terceros.</p>
                  </li>

                  <li>
                      <h5>Ley Aplicable:</h5>
                      <p>a. Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del Chile sin tener en cuenta sus disposiciones sobre conflictos de leyes.</p>
                  </li>
              </ol>

              <p>Al unirte al Programa de Afiliados, reconoces haber leído, comprendido y aceptado estos términos y condiciones.</p>

              <p>Si tienes alguna pregunta o inquietud, no dudes en contactarnos en <a href="mailto:info@caniConecta.com">info@caniConecta.com</a>.</p>

              <p>Gracias por unirte a nuestro programa de afiliados.</p>

              <p>Atentamente,</p>
              <p>CaniConecta</p>

              <div className="d-flex justify-content-center my-2">
                <form  onSubmit={handleSubmit}>
                  <button className="btn btn-primary">Suscribirse</button>
                </form>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* Bootstrap Bundle con Popper */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </div>
  );
}

export default RegistroAfiliado;
