import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './components/style/app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './components/pages/Inicio';
import Footer from './components/pages/Footer';
import Registro from './components/pages/Registro';
import 'animate.css';
import Login from './components/pages/Login';
import PanelPrincipal from './components/pages/PanelPrincipal';
import Sidebar from './components/pages/Sidebar';
import Panel from './components/pages/Panel';
import RegistroDog from './components/pages/RegistroDog';
import PanelInicio from './components/pages/PanelIncio';
import RegistroAfiliado from './components/pages/RegistroAfiliado';
import PanelAfiliado from './components/pages/panelAfiliado';
import ResetPass from './components/pages/ResetPass';



function App() {
  
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    wow.sync();


  }, []);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPass" element={<ResetPass />} />
        <Route path="/PanelPrincipal" element={<PanelPrincipal />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Panel/*" element={<Panel />}>
          <Route path="RegistroDog" element={<RegistroDog />} />
          <Route path="PanelInicio" element={<PanelInicio />} />
          <Route path="RegistroAfiliado" element={<RegistroAfiliado />} />
          <Route path="PanelAfiliado" element={<PanelAfiliado />} />
        </Route>

        {/*<Route path="*" element={<NoMatch />} />*/}

        {/* Otras rutas */}
      </Routes>
     {/* <Footer />  */}
      
    </BrowserRouter>
  );
}

export default App;
