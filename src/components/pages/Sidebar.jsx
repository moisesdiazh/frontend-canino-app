import React, { useState } from 'react';
import '../style/sidebar.css';
import Registro from './RegistroDog'; // Importa el contenido del Dashboard



const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <header>
      {/* Sidebar */}
      <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
        {/* ... (contenido del sidebar) ... */}
        <a href="#" onClick={() => handleSidebarClick('Registro')}>
          <span>Main dashboard</span>
        </a>
        <a href="#" onClick={() => handleSidebarClick('webTraffic')}>
          <span>Webiste traffic</span>
        </a>
        {/* ... (otros elementos del sidebar) ... */}

        
      </nav>
      {/* Sidebar */}

      {/* Mostrar el contenido correspondiente al sidebar */}
      <div className="content">
        {selectedOption === 'Registro' && <Registro />}
      </div>
      {/* Mostrar la card "Haste Premium" al final del sidebar */}

      
    
    </header>
  );
};

export default Sidebar;
