import React from 'react';
import Carousel from './Carousel';
import About from './About';
import Facts from './Facts';
import Service from './Service';
import Testimonios from './Testimonios';
import NavBar2 from './NavBar2';
import Footer from './Footer';

function Inicio() {
  return (
    <div>
      <NavBar2 /> {/* Agrega el componente Footer aquí */}
      <Carousel /> {/* Agrega el componente Footer aquí */}
      <Service /> {/* Agrega el componente Footer aquí */}
      <Facts /> {/* Agrega el componente Footer aquí */}
      <About /> {/* Agrega el componente Footer aquí */}
      <Testimonios /> {/* Agrega el componente Footer aquí */}
      <Footer /> {/* Agrega el componente Footer aquí */}

    </div>
  );
}

export default Inicio;
