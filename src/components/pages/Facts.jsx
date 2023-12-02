import React from 'react';
import '../style/app.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';
import { faUsersCog } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Facts() {
  return (
    <div className="container-fluid facts my-5 py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
            <FontAwesomeIcon icon={faDog} size="3x" className="text-white mb-3" />
            <h1 className="display-4 text-white" data-toggle="counter-up">120</h1>
            <span className="fs-5 text-white">Perritos Felices</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-users fa-3x text-white mb-3"></i>
            <h1 className="display-4 text-white" data-toggle="counter-up">100</h1>
            <span className="fs-5 text-white">Usuarios</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
            <FontAwesomeIcon icon={faUsersCog} className="fa-3x text-white mb-3" />
            <h1 className="display-4 text-white" data-toggle="counter-up">5</h1>
            <span className="fs-5 text-white">Servicios</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
          <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
            <FontAwesomeIcon icon={faCheck} className="fa-3x text-white mb-3" />
            <h1 className="display-4 text-white" data-toggle="counter-up">350</h1>
            <span className="fs-5 text-white">Servicios Realizados</span>
            <hr className="bg-white w-25 mx-auto mb-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
