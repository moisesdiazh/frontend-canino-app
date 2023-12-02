import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faUsers } from '@fortawesome/free-solid-svg-icons'; // Importa los íconos que necesites
import foto from '../../assets/petJose.jpg';
import vet1 from '../../assets/demoVet/vet1.png';
import vet2 from '../../assets/demoVet/vet2.png';
import vet3 from '../../assets/demoVet/vet3.png';
import vet4 from '../../assets/demoVet/vet4.png';
import vet5 from '../../assets/demoVet/vet5.png';
import '../style/inicio.css';
import { Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function PanelInicio () {

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
                        <i className="mdi mdi-calendar" ></i> Seleccione Servicio
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Servicio 1</a></li>
                        <li><a className="dropdown-item" href="#">Servicio 2</a></li>
                    </ul>
                    <div className="dropdown-spacer"></div>
                    <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >
                        <i className="mdi mdi-calendar"></i> Seleccione Mascota
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a className="dropdown-item" href="#">Mascota 1</a></li>
                        <li><a className="dropdown-item" href="#">Mascota 2</a></li>
                    </ul>
                </div>
            </div>

            <div class="container2">
                <div class="row">
                    <div class="col-md-6">
                    
                    <img src={foto} class="img-fluid" alt="Imagen" />
                    </div>
                    <div class="col-md-6">
                   
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card mb-4" id = "agregar-mascota" >
                                    <div class="card-body rounded">
                                        Editar Mascota
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4" id = "servicio-publico">
                                    <div class="card-body rounded">
                                        Servicio Público
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4" id = "asistencia-emergencia">
                                    <div class="card-body rounded">
                                        Veterinas de Emergencia
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card mb-4" id ="zonas-recreativas">
                                    <div class="card-body rounded">
                                        Zonas Recreativas
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container2">
                <div className="row">
                    <h4>Información General Para tu Mascota</h4>
                    <div className="col-md-6">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Informacion Básica 
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Raza</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">tamaño</th>
                                            <th scope="col">Peso Actual</th>
                                            <th scope="col">Peso Recomendado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">Thunder</th>
                                            <td>Mestizo</td>
                                            <td>3</td>
                                            <td>Mediano</td>
                                            <td>25</td>
                                            <td>22</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Recordatorios de Vacunas
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Vacunas</th>
                                            <th scope="col">Fecha Proxima Vacuna</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">Vacuna 1</th>
                                            <td>05-01-2024</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Vacuna 2</th>
                                            <td>06-02-2024</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Vacuna 3</th>
                                            <td>01-01-2024</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Recomendaciones
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                            <th scope="col">Actividad</th>
                                            <th scope="col">Frecuencia</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <th scope="row">Visitas al veterinario</th>
                                            <td>1-2 veces al año</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Actividad física</th>
                                            <td>Adaptada a la raza y edad del perro</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Corte de uñas</th>
                                            <td>Semanal</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Limpieza de dientes</th>
                                            <td>Diario</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Baño</th>
                                            <td>1 vez al mes</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Desparasitacion</th>
                                            <td>Mensual</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Hidratación</th>
                                            <td>Agua fresca disponible siempre</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Juegos</th>
                                            <td>Diario</td>
                                            </tr>
                                            <tr>
                                            <th scope="row">Entrenamiento</th>
                                            <td>Diario</td>
                                            </tr>
                                            
                                            <tr>
                                            <th scope="row">Alimentacion </th>
                                            <td>2-3 veces al día</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Alimentos Nocivos
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                <div class="alimentos-nocivos">
                                    <p>
                                    Los perros tienen un sistema digestivo diferente al de los humanos y, por lo tanto, son sensibles a ciertos alimentos que son seguros para los humanos pero tóxicos para ellos. Los alimentos nocivos para los perros pueden causar una variedad de problemas de salud, desde malestar estomacal hasta la muerte.
                                    </p>

                                    <h4>Alimentos más comunes</h4>

                                    <ul>
                                    <li>Chocolate</li>
                                    <li>Uvas y pasas</li>
                                    <li>Huesos de animales</li>
                                    <li>Cebollas y ajo</li>
                                    <li>Xilitol</li>
                                    </ul>

                                    <h4>Otros alimentos</h4>

                                    <ul>
                                    <li>Aguacate</li>
                                    <li>Tomate verde crudo</li>
                                    <li>Setas (dependiendo del tipo)</li>
                                    <li>Semillas y “huesos” de las frutas (contienen pequeñas cantidades de cianuro)</li>
                                    <li>Levaduras</li>
                                    <li>Pescado crudo</li>
                                    <li>Cafeína o teína</li>
                                    </ul>

                                    <h4>Consejos para evitar que tu perro coma alimentos nocivos</h4>

                                    <ul>
                                    <li>Mantén los alimentos nocivos fuera del alcance de tu perro.</li>
                                    <li>No permitas que tu perro coma de la basura o de la mesa.</li>
                                    <li>Supervisa a tu perro cuando esté fuera de casa.</li>
                                    <li>Enseña a tu perro a no comer alimentos que no le hayas dado.</li>
                                    </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
                    <div className="col-md-6">
                        
                    {/* Lista de contactos */}
                    <div className="card">
                        {/* Contenido de las tarjetas */}
                        <div class="card mb-3" >
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={vet1} class="img-fluid" alt="Imagen" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">
                                    <span>Lasos Pet - Clinica Veterina</span>
                                    <button type="button" class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
                                </h5>
                                    <p class="card-text">Informacion general:</p>
                                    <ul>
                                        <li>
                                            Precio Consulta General: 20.000 CLP
                                        </li>
                                        <li>
                                            Ubicacion: Santiago Centro
                                        </li>
                                        <li>
                                            Calificacion: 4.8
                                        </li>
                                    </ul>
                                    
                                </div>
                                </div>
                            </div>

                            



                        </div>


                        <div class="card mb-3" >
                        <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={vet2} class="img-fluid" alt="Imagen" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">
                                    <span>Veterinary - Clinica Veterina</span>
                                    <button type="button" class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
                                </h5>
                                    <p class="card-text">Informacion general:</p>
                                    <ul>
                                        <li>
                                            Precio Consulta General: 15.000 CLP
                                        </li>
                                        <li>
                                            Ubicacion: Santiago Centro
                                        </li>
                                        <li>
                                            Calificacion: 4.5
                                        </li>
                                    </ul>
                                    
                                </div>
                                </div>
                            </div>

                            



                        </div>



                        <div class="card mb-3" >
                        <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={vet3} class="img-fluid" alt="Imagen" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">
                                    <span>Caninos Salud - Clinica Veterina</span>
                                    <button type="button" class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
                                </h5>
                                    <p class="card-text">Informacion general:</p>
                                    <ul>
                                        <li>
                                            Precio Consulta General: 25.000 CLP
                                        </li>
                                        <li>
                                            Ubicacion: Santiago Centro
                                        </li>
                                        <li>
                                            Calificacion: 4.9
                                        </li>
                                    </ul>
                                    
                                </div>
                                </div>
                            </div>

                            



                        </div>


                        <div class="card mb-3" >
                        <div class="row g-0">
                                <div class="col-md-4">
                                    <img src={vet5} class="img-fluid" alt="Imagen" />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">
                                    <span>Vet Can - Clinica Veterina</span>
                                    <button type="button" class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
                                </h5>
                                    <p class="card-text">Informacion general:</p>
                                    <ul>
                                        <li>
                                            Precio Consulta General: 10.000 CLP
                                        </li>
                                        <li>
                                            Ubicacion: Santiago Centro
                                        </li>
                                        <li>
                                            Calificacion: 4.3
                                        </li>
                                    </ul>
                                    
                                </div>
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

export default PanelInicio;