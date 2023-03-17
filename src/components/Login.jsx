import React, {useState, useContext} from "react";
import {SuperAdminContext} from "../context/SuperAdminContext";
import Logoc from "../assets/Logoc.svg";
import ".././assets/styles/Login.css";




const Login =() => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const [errorMessage,setErrorMessage]=useState("");
    const[, setToken] = useContext(SuperAdminContext);

    const submitLogin = async () => {
        
        const requestOptions = {
            method: "POST",
            headers:{"Content-Type": "application/x-www-form-urlencoded"},
            body:JSON.stringify(`grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`),
        };

        const response = await fetch("/api/token", requestOptions);
            const data=  await response.json();
            if (!response.ok){
                setErrorMessage(data.detail);
            }   else { 
                setToken(data.access_token);
            }
        
    };

        const handleSubmit = (e) => {
            e.preventDefault();
            submitLogin();
        };

    return (
       
        <div className="wrapper">
            <div className="container main">
                <div className="row" id="container-row">
                    <div className="col-md-6 side-image">
                        <img src={Logoc} className="imageLogo" alt="Logo" />
                        <div className="text">
                            <p>Por los derechos de los niños y las niñas</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 right" >
                    <form className="input-box" onSubmit={handleSubmit}>
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

                        <div class="input-field" >
                            <button className="submit" type="submit" >
                                Ingresar
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Login;