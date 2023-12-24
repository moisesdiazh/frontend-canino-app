import React, {useState, useEffect} from "react";
import afiliado from '../../assets/afiliados.png';
import '../style/inicio.css';
import { Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';





const PanelAfiliado = () => {


    return(
        <div className="Panel-inicio">
            <div className="bienvenida" >
                <div>
                    <h3>Bienvenid@</h3>
                    <p>Que tengas un excelente día</p>
                </div>
                <div className="dropdown">
                    <select
                        className="btn btn-secondary"
                        id="servicio"
                        name="servicio"
                        required
                    >
                        <option value="">Selecciona un Servicio</option>
                            <option  value="Lasos Pet - Clinica Veterina">
                            Lasos Pet - Clinica Veterina
                            </option>
                    
                      
                    </select>
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
                            Clientes Atendidos: 0
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card mb-4" id = "Vistas">
                            <div class="card-body rounded">
                            Calificación: 5.0
                            </div>
                        </div>
                        </div>
                        <div class="col-md-6">
                        <div class="card mb-4" id ="Haste-Primiun">
                            <div class="card-body rounded">
                            Asciende a Premium
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
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td >
                                    {/* <button class="btn btn-success">Aceptar</button>
                                    <button class="btn btn-danger">Rechazar</button> */}
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
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    {/* <button class="btn btn-success">Calificar</button> */}
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