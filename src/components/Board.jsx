import React, {useContext} from "react";

import {SuperAdminContext} from "../context/SuperAdminContext";
import ".././assets/styles/btnLogout.css";


const Board = ({title}) => {
    const [token, setToken] = useContext(SuperAdminContext);

    const handleLogout = () => {
        setToken(null);
    };

    return(
        <div className="container">
            <h1 className="title">Acceso Administradores</h1>
            {token && (<button className='btnLogout'onClick={handleLogout}>Cerrar Sesión</button>) }

        </div>
        
    );
};

export default Board;