import React,{useContext, useState} from "react";
import Logoc from "../assets/Logoc.svg";
import { SuperAdminContext } from "../context/SuperAdminContext";

const Register = () => {
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirmationPassword,setConfirmationPassword] = useState("");
    const[errorMessage,setErrorMessage] = useState("");
    const[, setToken] = useContext(SuperAdminContext);

    return (
        <div className="wrapper">
            <div className="container main">
                <div className="row">
                    <div className="col-md-6 side-image"></div>
                    <img src={Logoc} alt="Logo" />
                    <div className="text">
                        <p>Por los derechos de los niños y las niñas</p>
                    </div>
                  
                </div>
                <div className="col-md-6 right"></div>
            </div>
        </div>
    )
};

export default Register;