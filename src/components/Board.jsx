import React, {useContext} from "react";

import {SuperAdminContext} from "../context/SuperAdminContext";

const Board = ({title}) => {
    const [token, setToken] = useContext(SuperAdminContext);

    const handleLogout = () => {
        setToken(null);
    };

    return(
        <div className="container">
            <h1 className="title">Acceso Administradores</h1>
            {token && (<button className="button" onClick={handleLogout}>Logout</button>) }

        </div>
        
    );
};

export default Board;