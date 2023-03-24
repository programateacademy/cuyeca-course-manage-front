import React, {useState, useContext} from "react";
import {SuperAdminContext} from "../context/SuperAdminContext";
import Logoc from "../assets/Logoc.svg";
import ".././assets/styles/Login.css";




const Login =(props) => {
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
            // the lines below fetch the data from different endpoints depending if the user is a superadmin that uses an email to login or an admin that uses an username to login //
            let response = null
                if (email.includes("@")){
                    response = await fetch("/api/token", requestOptions)
                    props.onUserType("superAdmin")
                } 
                if (!email.includes("@")){
                    response = await fetch("/api/token-admin", requestOptions)
                    props.onUserType("admin")
                } 

            const data=  await response.json();
            if (!response.ok){
                setErrorMessage(data.detail);
            } else {
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
                            <p>Por los derechos de los niños y las niñas.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 right" >
                    <form className="input-box" onSubmit={handleSubmit}>
                        <header>
                            Iniciar Sesion
                        </header>
                        <div class ="input-field">
                            <input type="text"
                            value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input"
                                    required
                                    />
                            <label for="text">Correo Electrónico o Usuario</label>
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