import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import imagenCarousel from '../../assets/carousel-6.png';
import imagenCarousel1 from '../../assets/carousel-4.png';
import { Link } from 'react-router-dom';
import Registro from './Registro';

function Carousel() {
    return (
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="w-100" src={imagenCarousel} alt="foto primer carrusel" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div class="col-lg-8">
                                        <p
                                            class="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                            Cuida a tu mejor amigo</p>
                                        <h1 class="display-1 mb-4 animated slideInDown" style={{ color: 'blue' }}>Informacion y Servicios a la mano
                                        </h1>
                                        <Link to ="./Registro"  className="btn btn-primary py-3 px-5 animated slideInDown">Conoce Más</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="w-100" src={imagenCarousel1} alt="foto segundo carrusel" />
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-lg-7">
                                        <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown">
                                            Bienvenid@ a CaniConecta
                                        </p>
                                        <h1 className="display-1 mb-4 animated fadeInDown" style={{ color: 'blue' }}>El Lugar Ideal Para Tu Mascota</h1>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" ariahidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;