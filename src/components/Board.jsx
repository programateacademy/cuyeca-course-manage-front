import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { SuperAdminContext } from "../context/SuperAdminContext";
import ".././assets/styles/btnLogout.css";

const Board = ({ title }) => {
  const [token, setToken] = useContext(SuperAdminContext);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className="container">
      <h1 className="title">Acceso Administradores</h1>
      {token && (
        <Link to="/admin">
          <button className="btnLogout" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </Link>
      )}
      {token && (
        <Link to="/createlesson">
          <button className="btnLogout">Crear Lecciones</button>
        </Link>
      )}
    </div>
  );
};

export default Board;
