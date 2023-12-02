import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faUsers } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import afiliado from '../../assets/afiliados.png';
import '../style/inicio.css';
import { Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function PanelAfiliado () {

    return(
        <div className="Panel-inicio">
            <div className="bienvenida" >
                <div>
                    <h3>Bienvenid@ Jose</h3>
                    <p>Que tengas un excelente día</p>
                </div>
                <div className="dropdown">
                    <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        <i className="mdi mdi-calendar"></i> Seleccione Servicio
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Servicio 1</a></li>
                        <li><a className="dropdown-item" href="#">Servicio 2</a></li>
                    </ul>
                </div>
            </div>

            <div class="container2">
                <div class="row">
                    <div class="col-md-6">
                    
                    <img src={afiliado} class="img-fluid" alt="Imagen" />
                    </div>
                    <div class="col-md-6">
                   
                    <div class="row">
                        <div class="col-md-6">
                        <div class="card mb-4" id = "editar-servicio" >
                            <div class="card-body rounded">
                            Editar Servicio
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card mb-4" id = "servicio-atendidos">
                            <div class="card-body rounded">
                            Clientes Atendidos: 10
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card mb-4" id = "Vistas">
                            <div class="card-body rounded">
                            Calificación: 4.9
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card mb-4" id ="Haste-Primiun">
                            <div class="card-body rounded">
                            Asciende a Primiun
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <div className="container2">
                <div className="row">
                    <div className="col-md-12">
                    <div class="accordion" id="accordionExample">
                    <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Servicio Pendientes
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Nombre Mascota</th>
                                <th scope="col">Fecha y Hora de Atención</th>
                                <th scope="col">Correo</th>
                                <th scope="col">telefono</th>
                                <th scope="col">Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">27-11-2023 15:00:00</th>
                                <td>Jose Guerra</td>
                                <td>Thunder</td>
                                <td>01-12-2023 14:00:00</td>
                                <td>jose@gmail.com</td>
                                <td>+58 935 111 333</td>
                                <td>
                                    <button class="btn btn-success">Aceptar</button>
                                    <button class="btn btn-danger">Rechazar</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">26-11-2023 13:00:00</th>
                                <td>Gabriela Rodriguez</td>
                                <td>Buffy</td>
                                <td>01-12-2023 18:00:00</td>
                                <td>gabriela@gmail.com</td>
                                <td>+58 935 456 111</td>
                                <td>
                                    <button class="btn btn-success">Aceptar</button>
                                    <button class="btn btn-danger">Rechazar</button>
                                </td>
                                </tr>
                                
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Servicios Atendidos
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Nombre Mascota</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Calificación </th>
                                <th scope="col">Calificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">28-11-2023 15:00:00</th>
                                <td>Jose Guerra</td>
                                <td>Thunder</td>
                                <td>jose@gmail.com</td>
                                <td>5</td>
                                <td>
                                    <button class="btn btn-success">Calificar</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">26-11-2023 13:00:00</th>
                                <td>Gabriela Rodriguez</td>
                                <td>Buffy</td>
                                <td>gabriela@gmail.com</td>
                                <td>4</td>
                                <td>
                                    <button class="btn btn-success">Calificar</button>
                                </td>
                                </tr>
                                
                            </tbody>
                            </table>
                            </div>
                            </div>
                        </div>
                        
                        </div>
                </div>
                    
                </div>
            </div>



        </div>
    )
}

export default PanelAfiliado;