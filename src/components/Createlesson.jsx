import React, {useState, useEffect} from "react";
import ".././assets/styles/Modulet.css";
import ErrorMessage from "./ErrorMessage";
import LessonModal from "./LessonModal"


const Createlesson = () => {
    
    const [lessons,setLessons] = useState(null);
    const [errorMessage,setErrorMessage] = useState("");
    const [loaded,setLoaded] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    const [id,setId] = useState(null);

    const handleUpdate = async (id) => {
        setId(id);
        setActiveModal(true);
    }

    const handleDelete = async (id) => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        };

            const response =await fetch(`/lesson/${id}`,requestOptions);
            if (!response.ok){
                setErrorMessage("Error al eliminar lección")
            }

            getLessons(response);
    };

    const getLessons = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/lesson",requestOptions);
        if (!response.ok){
            setErrorMessage("No se pudo cargar la lección");
        }else{
            const data = await response.json();
            setLessons(data);
            setLoaded(true);
        }
    };

    useEffect(() => {
        getLessons();

    }, []);

        const handleModal = () => {
            setActiveModal(!activeModal);
            getLessons();
            setId(null);

        }

    return(
    <>
    <LessonModal active={activeModal} handleModal={handleModal} id={id} setErrorMessage={setErrorMessage} />
    <ErrorMessage message={errorMessage}/>
       
        <div className="container mb-3">
            <br></br>
            <h1 className="text-center mb-3"> Modulo </h1>
            <div className="rows">
                <div className="">
                    <h2 className="text-center mb-3">Lista de Cursos</h2>
                    <div className="table-responsive">
                      {loaded && lessons ?(
                        <table className="table table-ligth">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Id</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lessons.map((lesson) => (    
                                <tr key={lesson.id}>
                                    <td> {lesson.name} </td>  
                                    <td> {lesson.description}</td>
                                    <td>{lesson.id}</td>
                                    <td><bttn className='btn btn-warning btn-sm' onClick={ () => handleUpdate(lesson.id)} >Modificar</bttn> </td>
                                    <td><bttn className='btn btn-danger btn-sm'onClick={ () => handleDelete(lesson.id)} >Eliminar</bttn>   </td>
                                </tr>
                                ) )}
                            </tbody>
                        </table>
                        ): <p>C</p> }
                        
                    </div>
                </div>
               
            </div>
        </div> 
         
    </>

    )

};

export default Createlesson
