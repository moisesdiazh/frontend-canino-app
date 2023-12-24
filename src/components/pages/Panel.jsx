import React, { useState, useEffect } from 'react'
import Navbar from "./Navbar";
import PanelSidebar from "./PanelSidebar";
import '../style/panel.css';
import { Outlet } from "react-router-dom";
import axios from 'axios';



const Panel = () => {

    
    useEffect(() => {
        // Ajustar el padding del body solo cuando el componente se monte
        document.body.classList.add('panel-body-padding');
        return () => {
            document.body.classList.remove('panel-body-padding');
          };
        }, []);
    return (
        
        <>
            <Navbar />
            <div className="flex">
                <PanelSidebar />

                <div className="content panel-content">
                    <Outlet />
                    
                </div>
            </div>
        </>
    )
}

export default Panel;
