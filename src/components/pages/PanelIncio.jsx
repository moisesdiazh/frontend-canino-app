import React, { useState, useEffect } from "react";
import vet1 from '../../assets/demoVet/vet1.png';
import vet2 from '../../assets/demoVet/vet2.png';
import vet3 from '../../assets/demoVet/vet3.png';
import vet5 from '../../assets/demoVet/vet5.png';
import '../style/inicio.css';
import { Accordion, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function formatFecha(fechaOriginal) {
    const fechaFormateada = new Date(fechaOriginal).toLocaleDateString();
    return fechaFormateada;
}


const PanelInicio = () => {


    const token = localStorage.getItem('token');

    const [perros, setPerros] = useState([]);

    const [datosPerro, setDatosPerro] = useState([]);


    const [selectedPerro, setSelectedPerro] = useState('');

    const [selectedServicio, setSelectedServicio] = useState('');


    const [vacunaPerro, setVacunaPerro] = useState([]);


    const razas = [
        { id: 1, paseoRecomendado: '30-60 minutos', pesoRecomendado: '25-36 kg', nombre: 'Labrador Retriever', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Labrador_on_Quantock_%282175262184%29.jpg/800px-Labrador_on_Quantock_%282175262184%29.jpg'},
        { id: 2, paseoRecomendado: '20-30 minutos', pesoRecomendado: '8-14 kg', nombre: 'Bulldog Francés', photo: 'https://www.k9web.com/wp-content/uploads/2021/02/cute-blue-french-bulldog-780x589.jpg'},
        { id: 3, paseoRecomendado: '30-60 minutos', pesoRecomendado: '30-40 kg', nombre: 'German Shepherd', photo: 'https://images.saymedia-content.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_700/MTk2NzIzMTQ2NzMxMTAzMjUw/11-dogs-like-german-shepherd.webp'},
        { id: 4, paseoRecomendado: '30-60 minutos', pesoRecomendado: '5-32 kg', nombre: 'Poodle', photo: 'https://www.mascotasalamoda.cl/wp-content/uploads/2016/11/istock_000039760954_small.jpg'},
        { id: 5, paseoRecomendado: '30-60 minutos', pesoRecomendado: '9-16 kg', nombre: 'Beagle', photo: 'https://hips.hearstapps.com/hmg-prod/images/beagle-running-on-field-royalty-free-image-1619098658.?crop=1.00xw:0.666xh;0,0.334xh&resize=980:*'},

        { id: 6, paseoRecomendado: '60-90 minutos', pesoRecomendado: '40-60 kg', nombre: 'Rottweiler', photo: 'https://t2.uc.ltmcdn.com/es/posts/7/3/9/caracteristicas_fisicas_del_rottweiler_50937_1_600.webp'},
        { id: 7, paseoRecomendado: '60-90 minutos', pesoRecomendado: '25-32 kg', nombre: 'Boxer', photo: 'https://cdn.shopify.com/s/files/1/0268/6861/files/boxer_grande.jpg?v=1530537386'},
        { id: 8, paseoRecomendado: '15-30 minutos', pesoRecomendado: '5-12 kg', nombre: 'Dachshund', photo: 'https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2020/03/Dachshund-CUERPO.jpg?w=865&ssl=1'},
        { id: 9, paseoRecomendado: '20-30 minutos', pesoRecomendado: '4-7 kg', nombre: 'Shih Tzu', photo: 'https://www.donpeludo.com/wp-content/uploads/2018/10/shih-tzu-1794595_1280-1024x682.jpg.webp'},
        { id: 10, paseoRecomendado: '60-90 minutos', pesoRecomendado: '16-27 kg', nombre: 'Siberian Husky', photo: 'https://a.storyblok.com/f/152976/4868x3244/c1982cf25c/istock-510851320.png'},

        { id: 11, paseoRecomendado: '60-90 minutos', pesoRecomendado: '32-45 kg', nombre: 'Doberman Pinscher', photo: 'https://okdiario.com/img/2019/06/01/doberman-893931_1920-1-1-655x368.jpg'},
        { id: 12, paseoRecomendado: '10-20 minutos', pesoRecomendado: '1-2.7 kg', nombre: 'Chihuahua', photo: 'https://lucasylola.es/blog/wp-content/uploads/2023/02/Chihuahua-3-lucasy-lola.jpg'},
        { id: 13, paseoRecomendado: '30-60 minutos', pesoRecomendado: '54-90 kg', nombre: 'Great Dane', photo: 'https://www.zooplus.es/magazine/wp-content/uploads/2017/10/deutsche-dogge.jpg'},
        { id: 14, paseoRecomendado: '30-60 minutos', pesoRecomendado: '6-11 kg', nombre: 'Shetland Sheepdog', photo: 'https://assets.orvis.com/is/image/orvisprd/AdobeStock_14023497?wid=1023&src=is($object$:7-3)'},
        { id: 15, paseoRecomendado: '30-60 minutos', pesoRecomendado: '25-34 kg', nombre: 'Golden Retriever', photo: 'https://www.orchardroadanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=q7VNmAD8'},

        { id: 16, paseoRecomendado: '15-30 minutos', pesoRecomendado: '1.4-3 kg', nombre: 'Pomeranian', photo: 'https://image.petmd.com/files/styles/978x550/public/2022-10/pomeranian.jpeg'},
        { id: 17, paseoRecomendado: '20-40 minutos', pesoRecomendado: '5.4-8.2 kg', nombre: 'Cavalier King Charles Spaniel', photo: 'https://www.akc.org/wp-content/uploads/2017/11/Cavalier-King-Charles-Spaniel-standing-in-the-grass.jpg'},
        { id: 18, paseoRecomendado: '20-40 minutos', pesoRecomendado: '5-10 kg', nombre: 'Bichon Frise', photo: 'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-01/Bichon%20Frise1.jpg?itok=aJSdcipJ'},
        { id: 19, paseoRecomendado: '20-30 minutos', pesoRecomendado: '6-9 kg', nombre: 'Pug', photo: 'https://media.cnnchile.com/sites/2/2022/05/pexels-steshka-willems-1591939.jpg'},
        { id: 20, paseoRecomendado: '60-90 minutos', pesoRecomendado: '12-20 kg', nombre: 'Border Collie', photo: 'https://highlandcanine.com/wp-content/uploads/2023/04/border-collie-in-the-grass.jpg'},
    ];

    const razaMapping = {};
        razas.forEach(raza => {
        razaMapping[raza.id] = raza.nombre;
    });

    const razaPesoMapping = {};
        razas.forEach(raza => {
            razaPesoMapping[raza.id] = raza.pesoRecomendado;
    });

    const razaActividadMapping = {};
        razas.forEach(raza => {
            razaActividadMapping[raza.id] = raza.paseoRecomendado;
    });

    

    const razaPhotoMapping = {};
        razas.forEach(raza => {
        razaPhotoMapping[raza.id] = raza.photo;
    });  

    const vacunasObj = [
        { id: 1, nombre: 'Parvovirus' },
        { id: 2, nombre: 'Moquillo' },
        { id: 3, nombre: 'Hepatitis infecciosa canina' },
        { id: 4, nombre: 'Leptospirosis' },
        { id: 5, nombre: 'Rabia' },

        { id: 6, nombre: 'Tos de las perreras' },
        { id: 7, nombre: 'Coronavirus canino' },
        { id: 8, nombre: 'Adenovirus canino tipo 1' },
        { id: 9, nombre: 'Adenovirus canino tipo 2' },
        { id: 10, nombre: 'Bordetella bronchisepticay' },

        { id: 11, nombre: 'Leishmaniosis' },
        { id: 12, nombre: 'Lyme' },
        { id: 13, nombre: 'Giardia' },
        { id: 14, nombre: 'Influenza canina' },

    ];

    const vacunaMapping = {};
        vacunasObj.forEach(v => {
        vacunaMapping[v.id] = v.nombre;
    });



    const handleSelectChange = (e) => {

        setSelectedPerro(e.target.value);
    };

    const handleSelectServicioChange = (e) => {

        console.log(e.target.value)
        setSelectedServicio(e.target.value);
    };


    useEffect(() => {
        axios.get(`http://localhost:8080/api/perros-user/${token}`, { maxRedirects: 5 })
        .then(response => {
          setPerros(response.data)
        })
        .catch(error => {
          console.error('Error al obtener perros:', error);
        });
    
      }, [token]); 


      useEffect(() => {
        if (selectedPerro) {
            axios.get(`http://localhost:8080/api/perro/${selectedPerro}`, { maxRedirects: 5 })
                .then(response => {
                    setDatosPerro(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener perros:', error);
                });
        
        }
    }, [selectedPerro]);

      useEffect(() => {
        if (selectedPerro) {
            axios.get(`http://localhost:8080/api/vacunas-perro/${selectedPerro}`, { maxRedirects: 5 })
                .then(response => {
                    setVacunaPerro(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener perros:', error);
                });
        
        }
    }, [selectedPerro]);


    const showAlert = () => {
        alert('¡Hemos enviado su solicitud!');
    };


    return(
        <div className="Panel-inicio">
            <div className="bienvenida" >
                <div>
                    <h3>Bienvenid@ <button className="btn btn-primary">Calificación: 5.0</button></h3>
                    <p>Que tengas un excelente día</p>
                </div>

                <div className="dropdown mx-5">

                    <select
                        className="btn btn-secondary"
                        id="servicio"
                        name="servicio"
                        onChange={handleSelectServicioChange}
                        value={selectedServicio}
                        required
                    >
                        <option value="">Selecciona un Servicio</option>
                            <option  key="" value="veterinaria">
                                Veterinaria
                            </option>
                            <option  key="" value="paseador">
                                Paseador de caninos
                            </option>
                            <option  key="" value="peluqueria">
                                Peluqueria canina
                            </option>
                      
                    </select>
                    
                    <div className="dropdown-spacer"></div>

                    <select
                        className="btn btn-secondary"
                        id="perro"
                        name="perro"
                        onChange={handleSelectChange}
                        value={selectedPerro}
                        required
                    >
                        <option value="">Selecciona una mascota</option>
                        {perros.map(perro => (
                            <option  key={perro.id} value={perro.id}>
                            {perro.nombreCanino}
                            </option>
                        ))}
                    </select>
                    
                </div>
            </div>

            {selectedPerro  && (
            <div class="container2">
                <div class="row">
                    <div class="col-md-6">


                    {datosPerro && (
                            <img src={razaPhotoMapping[datosPerro.raza]} className="img-fluid" alt="Imagen" />
                    )}
                
                    </div>
                    <div class="col-md-6">
                   
                        <div class="row mx-5">
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
            )}

            
            <div className="container2">
                <div className="row">
                {selectedPerro && (
                    <h4 style={{ visibility: 'visible' }}>
                    Información General Para tu Mascota
                    </h4>
                )}
                {!selectedPerro && (
                    <h4 style={{ visibility: 'hidden' }}>
                    Información General Para tu Mascota
                    </h4>
                )}
                    {selectedPerro  && (
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
                                            <th scope="col">Tamaño</th>
                                            <th scope="col">Peso Actual</th>
                                            <th scope="col">Peso Recomendado</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        {datosPerro && (
                        
                                            <tr>
                                            <th scope="row">{datosPerro.nombreCanino}</th>
                                            <td>{razaMapping[datosPerro.raza]}</td>
                                            <td>{datosPerro.edad}</td>
                                            <td>{datosPerro.tamanno }</td>
                                            <td>{datosPerro.peso}</td>
                                            <td>{razaPesoMapping[datosPerro.raza]}</td>
                                            </tr>
                                        )}
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
                                            <th scope="col">Fecha Última Vacuna</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vacunaPerro.map(vacunaP => (
                                                <tr>
                                                <th scope="row">{vacunaMapping[vacunaP.vacuna]}</th>
                                                <td>{formatFecha(vacunaP.fechaVacuna)}</td>
                                                </tr>
                                            ))}
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
                                            {datosPerro && (
                                            <td>{razaActividadMapping[datosPerro.raza]}</td>
                                            )}
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
                                    <li>Palta</li>
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

                )}

                {selectedServicio  && (
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
                                    <button type="button" onClick={showAlert} class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
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
                                            Calificacion: 5.0
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
                                    <button type="button" onClick={showAlert} class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
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
                                    <button type="button" onClick={showAlert} class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
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
                                    <button type="button" onClick={showAlert} class="btn btn-sm btn-secondary" style={{ float: "right" }}>Contactar</button>
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
                )}
                </div>
            </div>
            


        </div>
    )
}

export default PanelInicio;