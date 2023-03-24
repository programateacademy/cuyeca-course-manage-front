import React, { useState,useEffect } from "react";
import ".././assets/styles/Modulet.css";


const LessonModal = ({active, handleModal,id,setErrorMessage}) => {
    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[title_resource,setTitle_resource]= useState("");

    useEffect(() => {
        const getLesson = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
    
        };

        const response = await fetch(`/lesson/${id}`, requestOptions);

        if (!response.ok){
            setErrorMessage("No se pudo encontrar el Curso")
        }else {
            const data = await response.json();
            setName(data.name);
            setDescription(data.description);
            setTitle_resource(data.title_resource);
            
        }
    };

    if (id) {
        getLesson();
    }

    }, [id]);

    const cleanFormData = () => {
        setName("");
        setDescription("");
        setTitle_resource("");

    };



    const handleCreateLesson = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },

            body: JSON.stringify({name:name, description: description,title_resource:title_resource  }),
        };
        const response = await fetch("/lesson", requestOptions);
        if (!response.ok){
            setErrorMessage("Algo salió mal al crear la lección ");
        }else{
            cleanFormData();
            handleModal();
        }
    };

    const handleUpdateLesson = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:name, description: description,title_resource:title_resource }),

        };

        const response = await fetch(`/lesson/${id}`, requestOptions);
        if (!response.ok){
        setErrorMessage("Algo salió mal al actualizar la lección ");
        } else{
            cleanFormData();
            handleModal();
        }

    };

    return(
        <section className="form-main"> 
        <div className="form-content">           
            <div className="box">
                <h3> Creacion de lecciones </h3>
                <form action="">
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese el nombre" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese la descripción" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese los recursos" 
                        value={title_resource} 
                        onChange={(e) => setTitle_resource(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                  

                    <div className="mb-3 d-flex justify-content-center align-items-center">
                       {id ? (
                       <button className='btnmodule'  onClick={handleUpdateLesson}>Actualizar</button> 
                       ): (
                       
                       <button className='btnmodule'  onClick={handleCreateLesson}>Crear</button>
                    )} 
                      
                        <button className="btnmodule second-btn" style={{ marginLeft: '10px'}} onClick={handleModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default LessonModal;