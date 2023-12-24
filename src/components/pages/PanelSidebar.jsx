import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faUsers, faSyringe } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import AfiliadoTarjeta from './AfiliadoTarjeta';
import '../style/sidebar.css'
import axios from 'axios';



const  PanelSidebar = () => {

    const afiliado = localStorage.getItem('afiliado');


    return(
        <div className="sidebarPanel">
            <ul>
                <li>
                    <Link to ="/Panel/panelInicio">
                    <FontAwesomeIcon icon={faHome} />Inicio</Link>
                </li>
                <li>
                    <Link to="/Panel/RegistroDog">
                    <FontAwesomeIcon icon={faDog} />Agregar Mascota</Link>
                </li>
                <li>
                    <Link to ="/Panel/AddVacunas">
                    <FontAwesomeIcon icon={faSyringe} />Agregar Calendario de Vacunas</Link>
                </li>


                {afiliado != null && (

                    <li>
                        <Link to ="/Panel/AddServicio">
                        <FontAwesomeIcon icon={faUsers} />Agregar Servicio</Link>
                    </li>
                )}

                {afiliado != null && (


                    <li>
                        <Link to ="/Panel/PanelAfiliado">
                        <FontAwesomeIcon icon={faUsers} />Tus Servicios</Link>
                    </li>
                )}

                {afiliado == null  && (
                    <AfiliadoTarjeta className="card-haste-premium-card" />
                )}
            </ul>
        </div>
    )
}

export default PanelSidebar;