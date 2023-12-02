import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faUsers } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import AfiliadoTarjeta from './AfiliadoTarjeta';
import PanelAfiliado from "./panelAfiliado";
import '../style/sidebar.css'


function PanelSidebar () {

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
                    <Link to ="/Panel/PanelAfiliado">
                    <FontAwesomeIcon icon={faUsers} />Tus Servicios</Link>
                </li>
                <AfiliadoTarjeta className="card-haste-premium-card" />
            </ul>
        </div>
    )
}

export default PanelSidebar;