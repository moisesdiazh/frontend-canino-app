import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import sobre from '../../assets/petJose4.png';

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4 align-items-end mb-4">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <img className="w-100" src={sobre} alt="foto primer carrusel" />
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Sobre Nosotros</p>
            <h1 className="display-5 mb-4">Cuidado Feliz para Mascotas</h1>
            <p className="mb-4">no solo ayudamos a hacer crecer negocios; ayudamos a crecer corazones peludos. Somos la plataforma digital donde las patas digitales dejan una marca duradera, y donde el compromiso con el bienestar canino se refleja en cada rincón de nuestro espacio en línea</p>
            <div className="border rounded p-4">
              <nav>
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link fw-semi-bold active" id="nav-story-tab" data-bs-toggle="tab" data-bs-target="#nav-story" type="button" role="tab" aria-controls="nav-story" aria-selected="true">Historia</button>
                  <button className="nav-link fw-semi-bold" id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission" type="button" role="tab" aria-controls="nav-mission" aria-selected="false">Misión</button>
                  <button className="nav-link fw-semi-bold" id="nav-vision-tab" data-bs-toggle="tab" data-bs-target="#nav-vision" type="button" role="tab" aria-controls="nav-vision" aria-selected="false">Visión</button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-story" role="tabpanel" aria-labelledby="nav-story-tab">
                  <p>En el mundo digital, nuestra historia se teje con hilos de pasión por los perros. Comenzamos con la idea de ser más que un simple sitio web: queríamos ser un refugio virtual, un oasis de contenido que refleje el amor incondicional que sentimos por nuestros amigos peludos.</p>
                  <p className="mb-0">Desde nuestros humildes comienzos hasta ahora, hemos construido una comunidad digital vibrante y llena de historias encantadoras. Cada clic es un paso hacia la transformación positiva en la vida de los perros, y cada conexión en línea es una celebración de la alegría canina.</p>
                </div>
                <div className="tab-pane fade" id="nav-mission" role="tabpanel" aria-labelledby="nav-mission-tab">
                  <p>Nuestra misión en este ciberespacio es construir puentes de afecto y cuidado para nuestros amigos de cuatro patas. Nos dedicamos a crear un ambiente digital donde el amor, la salud y la diversión sean los pilares de la experiencia perruna</p>
                  <p className="mb-0">Estamos comprometidos en proporcionar información valiosa, servicios de calidad y un toque de alegría virtual, porque creemos que cada perro merece una vida plena y feliz.</p>
                </div>
                <div className="tab-pane fade" id="nav-vision" role="tabpanel" aria-labelledby="nav-vision-tab">
                  <p>n nuestro rincón digital, vislumbramos un universo donde cada perro es protagonista de su propia historia de amor y bienestar. </p>
                  <p className="mb-0">Nos visualizamos como la fuerza impulsora detrás de sonrisas perrunas y colas que no paran de moverse. Nos esforzamos por ser el epicentro de la felicidad canina, donde cada patita deja una huella de alegría.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-4">
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-times text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>No Ocultamos costos</h4>
                    <span>No ocultamos costos de los servicios</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-users text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>Equipo dedicado</h4>
                    <span>Siempre alguien atendera tus consultas</span>
                  </div>
                  <div className="border-end d-none d-lg-block"></div>
                </div>
                <div className="border-bottom mt-4 d-block d-lg-none"></div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-flex">
                  <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                    <i className="fa fa-phone text-white"></i>
                  </div>
                  <div className="ps-3">
                    <h4>24/7 Disponibilidad</h4>
                    <span>contaras con servicios continuo</span>
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

export default About;
