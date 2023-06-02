import React, {useState, useEffect} from "react";
import ".././assets/styles/Modulet.css";
import ErrorMessage from "./ErrorMessage";
import LessonModal from "./LessonModal";
import Board from "../components/Board"


const Createlesson = () => {
    
    const [lessons,setLesson] = useState(null);
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

            getLesson(response);
    };

    const getLesson = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/lessons",requestOptions);
        if (!response.ok){
            setErrorMessage("No se pudo cargar la lección");
        }else{
            const data = await response.json();
            setLesson(data);
            setLoaded(true);
        }
    };

    useEffect(() => {
        getLesson();

    }, []);

        const handleModal = () => {
            setActiveModal(!activeModal);
            getLesson();
            setId(null);

        }

    return(
    <>
    <Board title={"lo q sea"}/>
    <LessonModal active={activeModal} handleModal={handleModal} id={id} setErrorMessage={setErrorMessage} />
    <ErrorMessage message={errorMessage}/>
       
        <div className="container mb-3">
            <br></br>
            <h1 className="text-center mb-3"> Lecciones </h1>
            <div className="rows">
                <div className="">
                    <h2 className="text-center mb-3">Lista de Lecciones</h2>
                    <div className="table-responsive">
                      {loaded && lessons ?(
                        <table className="table table-ligth">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Video</th>
                                    <th>Recursos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lessons.map((lesson) => (    
                                <tr key={lesson.id}>
                                    <td> {lesson.name} </td>  
                                    <td> {lesson.description}</td>
                                    <td>{lesson.video}</td>
                                    <td>{lesson.resources}</td>
                                    <td><bttn className='btn btn-warning btn-sm' onClick={ () => handleUpdate(lesson.id)} >Modificar</bttn> </td>
                                    <td><bttn className='btn btn-danger btn-sm'onClick={ () => handleDelete(lesson.id)} >Eliminar</bttn>   </td>
                                </tr>
                                ) )}
                            </tbody>
                        </table>
                        ): <p>Cargando</p> }
                        
                    </div>
                </div>
               
            </div>
        </div> 
         
    </>

    )

};

export default Createlesson;
