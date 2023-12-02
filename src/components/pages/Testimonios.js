import React from 'react';
import '../style/app.css';
import 'animate.css';
import test1 from '../../assets/test1.png'; // Asegúrate de tener la ruta correcta
import test2 from '../../assets/test2.png'; // Asegúrate de tener la ruta correcta

const Testimonios = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">
            Testimonios
          </p>
          <h1 className="display-5 mb-5">Que dicen nuestra Comunidad</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="testimonial-item mb-4">
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                lorem magna ut et, nonumy et labore et tempor diam tempor erat.
              </div>
              <img className="rounded-circle mb-3" src={test1} alt="Testimonial 1" />
              <h4>Gabriela D.</h4>
              <span>Informatico</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item mb-4">
              {/* Contenido del testimonio 2 */}
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                lorem magna ut et, nonumy et labore et tempor diam tempor erat.
              </div>
              <img className="rounded-circle mb-3" src={test2} alt="Testimonial 1" />
              <h4>Gabriela D.</h4>
              <span>Informatico</span>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-item mb-4">
              {/* Contenido del testimonio 2 */}
              <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                <div className="btn-square bg-white border rounded-circle">
                  <i className="fa fa-quote-right fa-2x text-primary"></i>
                </div>
                Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem
                lorem magna ut et, nonumy et labore et tempor diam tempor erat.
              </div>
              <img className="rounded-circle mb-3" src={test1} alt="Testimonial 1" />
              <h4>Gabriela D.</h4>
              <span>Informatico</span>
            </div>
          </div>
          {/* Agrega más testimonios en pares de col-md-6 */}
          
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
