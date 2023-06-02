import React, { useState,useEffect } from "react";
import ".././assets/styles/Modulet.css";

const AdminModal = ({active, handleModal,token,id,setErrorMessage}) => {
    const[username,setUserName]= useState("");
    const[password,setPassword]= useState("");

    useEffect(() => {
        const getAdmin = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                },
    
        };

        const response = await fetch(`/api/admins/${id}`, requestOptions);

        if (!response.ok){
            setErrorMessage("No se pudo encontrar el administrador")
        }else {
            const data = await response.json();
            setUserName(data.username);
            setPassword(data.password);
        }
    };

    if (id) {
        getAdmin();
    }

    }, [id,token]);

    const cleanFormData = () => {
        setUserName("");
        setPassword("");

    };



    const handleCreateAdmin = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },

            body: JSON.stringify({username: username,password: password}),
        };
        const response = await fetch("/api/admins", requestOptions);
        if (!response.ok){
            setErrorMessage("Algo salió mal al crear el administrador");
        }else{
            cleanFormData();
            handleModal();
        }
    };

    const handleUpdateAdmin = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify({username: username,password: password}),

        };

        const response = await fetch(`/api/admins/${id}`, requestOptions);
        if (!response.ok){
        setErrorMessage("Algo salió mal al actualizar el administrador");
        } else{
            cleanFormData();
            handleModal();
        }

    };

    return(
        <section className="form-main"> 
        <div className="form-content">           
            <div className="box">
                <h3 >Creación de administradores</h3>
                <form action="">
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese el nombre" 
                        value={username} 
                        onChange={(e) => setUserName(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese la contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                   
                    <div className="mb-3 d-flex justify-content-center align-items-center">
                       {id ? (
                       <button className='btnmodule' onClick={handleUpdateAdmin}>Actualizar</button> 
                       ): (
                       <button className='btnmodule' onClick={handleCreateAdmin}>Crear</button>
                    )} 
                        <button className="btnmodule" onClick={handleModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default AdminModal;