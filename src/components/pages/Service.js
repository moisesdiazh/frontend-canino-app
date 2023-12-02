import React from 'react';
import serviceImage1 from '../../assets/service-5.jpg';
import serviceImage2 from '../../assets/service-6.jpg';
import petjose3 from '../../assets/petjose3.jpg';

function Service() {
  return (
    <div className="container-xxl service py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
          <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Servicios</p>
          <h1 className="display-5 mb-5">Cuida y Conecta con a tu Mascota en un Solo Sitio</h1>
        </div>
        <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="col-lg-4">
            <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                  data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                  <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Conoce a tu Mascota</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill" data-bs-target="#tab-pane-2" type of="button">
                  <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Paseos recreativos</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                  <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Veterinarias</h5>
              </button>
              <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                  data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                  <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Alojamientos</h5>
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="tab-content w-100">
              <div className="tab-pane fade show active" id="tab-pane-1">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src={serviceImage1}
                          style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Solo con Registrar a tu amigo de 4 patas</h3>
                    <p className="mb-4">Tendras Información detallada sobre el cuidado de 
                        tu mascota, solo con registrarla te daremos informacion sobre rango de peso ideal, vacunas necesarias,
                        Recomendaciones, servicios de emergencias, servicios publicos y mucho más.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Rapido</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Confiable</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Actualizado</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Saber Más</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-2">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src={serviceImage2}
                          style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Dale el tiempo que necesita</h3>
                    <p className="mb-4">Conectaras con apasionados de los animales que le podran
                        Brindar el tiempo necesario para que tu compañero se ejercite y se recree
                        tendras a un perro feliz en casa.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Perros Felices</p>
                    <p><i className="fa fa-check text-primary me-3"></i>El tiempo que el necesita</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Recomendaciones cerca de tu ubicación</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Saber más</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-3">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src={petjose3}
                          style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Nos ocupamos de informate el mejor el mejor sitio para atender a tu mascota</h3>
                    <p className="mb-4">Tendras informacion de las veterinas de emergencia, veterinarias públicas, y veterinas privadas
                        con los precios de los servicios generales a la vista.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Diversidad de servicios</p>
                    <p><i className="fa fa-check text-primary me-3"></i>En tu zona</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Mascota Saludable</p>
                    <a href="#" className="btn btn-primary py-3 px-5 mt-3">Saber Más</a>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab-pane-4">
                <div className="row g-4">
                  <div className="col-md-6" style={{ minHeight: '350px' }}>
                    <div className="position-relative h-100">
                      <img className="position-absolute rounded w-100 h-100" src={petjose3}
                          style={{ objectFit: 'cover' }} alt="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="mb-4">Hotel Canino de Confianza</h3>
                    <p className="mb-4">Te conectaremos con los mejores Hoteles Caninos o amanes de los animales
                         que presten este servicio, para que en esos momentos que no puedas llevarlo 
                        se quede en las mejores manos.</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Tranquilidad</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Confianza</p>
                    <p><i className="fa fa-check text-primary me-3"></i>Seguridad</p>
                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Saber más</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
