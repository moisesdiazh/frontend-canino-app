import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css/';
import '../lib/animate/animate.css';
import '../lib/animate/animate.min.css';


const AnimatedText = () => {
  useEffect(() => {
    // Inicialización de WOW.js
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <div className="wow fadeIn" data-wow-duration="4s" data-wow-delay="0.5s">
      <h1>¡Texto Animado con WOW.js!</h1>
    </div>
  );
};

export default AnimatedText;