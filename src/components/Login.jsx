import React, {useState, useContext} from "react";
import {SuperAdminContext} from "../context/SuperAdminContext";
import Logoc from "../assets/Logoc.svg";
import ".././assets/styles/Login.css";

const Login =() => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[, setToken] = useContext(SuperAdminContext);

    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                        <img src={Logoc} className="imageLogo" alt="Logo" />
                        <div className="text">
                            <p>Por los derechos de los niños y las niñas</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 right">
                    <div className="input-box">
                        <header>
                            Iniciar Sesion
                        </header>
                        <div class ="input-field">
                            <input type="email"
                            value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input"
                                    required
                                    />
                            <label for="email">Correo Electronico</label>
                        </div>
                        <div class ="input-field">
                            <input type="password" 
                            value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input"
                                    required
                                    />
                            <label for="email">Contraseña</label>
                        </div>

                        <div class="input-field">
                            <input type="submit" className="submit" value="Ingresar"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Login;