import React, { useState,useEffect } from "react";
import ".././assets/styles/Modulet.css";


const CoursesModal = ({active, handleModal,id,setErrorMessage}) => {
    const[name,setName]= useState("");
    const[description,setDescription]= useState("");
    const[lines_of_work,setLines_of_work]= useState("");
    const[specific_objetives,setSpecific_objetives]= useState("");
    const[type_of_course,setType_of_course]= useState("");

    useEffect(() => {
        const getCourse = async () => {
            const requestOptions = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
    
        };

        const response = await fetch(`/courses/${id}`, requestOptions);

        if (!response.ok){
            setErrorMessage("No se pudo encontrar el Curso")
        }else {
            const data = await response.json();
            setName(data.name);
            setDescription(data.description);
            setLines_of_work(data.lines_of_work);
            setSpecific_objetives(data.specific_objetives);
            setType_of_course(data.type_of_course);
        }
    };

    if (id) {
        getCourse();
    }

    }, [id]);

    const cleanFormData = () => {
        setName("");
        setDescription("");
        setLines_of_work("");
        setSpecific_objetives("");
        setType_of_course("");

    };



    const handleCreateCourse = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                
            },

            body: JSON.stringify({name:name, description: description, lines_of_work:lines_of_work, specific_objetives:specific_objetives, type_of_course:type_of_course }),
        };
        const response = await fetch("/courses", requestOptions);
        if (!response.ok){
            setErrorMessage("Algo salió mal al crear el curso");
        }else{
            cleanFormData();
            handleModal();
        }
    };

    const handleUpdateCourse = async (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name:name, description: description, lines_of_work:lines_of_work, specific_objetives:specific_objetives, type_of_course:type_of_course}),

        };

        const response = await fetch(`/courses/${id}`, requestOptions);
        if (!response.ok){
        setErrorMessage("Algo salió mal al actualizar el curso ");
        } else{
            cleanFormData();
            handleModal();
        }

    };

    return(
        <section className="form-main"> 
        <div className="form-content">           
            <div className="box">
                <h3> Formulario </h3>
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
                        <input type="text" placeholder="Ingrese las lineas de trabajo" 
                        value={lines_of_work} 
                        onChange={(e) => setLines_of_work(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese los objetivos especificos" 
                        value={specific_objetives} 
                        onChange={(e) => setSpecific_objetives(e.target.value)}
                        className="form-control"
                        required />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder="Ingrese el tipo de curso" 
                        value={type_of_course} 
                        onChange={(e) => setType_of_course(e.target.value)}
                        className="form-control"
                        required />
                    </div>

                    <div className="mb-3 d-flex justify-content-center align-items-center">
                       {id ? (
                       <button className='btnmodule'  onClick={handleUpdateCourse}>Actualizar</button> 
                       ): (
                       
                       <button className='btnmodule'  onClick={handleCreateCourse}>Crear</button>
                    )} 
                      
                        <button className="btnmodule second-btn" style={{ marginLeft: '10px'}} onClick={handleModal}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default CoursesModal;