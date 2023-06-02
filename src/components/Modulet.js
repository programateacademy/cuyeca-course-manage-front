import React, {useState, useEffect} from "react";
import ".././assets/styles/Modulet.css";
import ErrorMessage from "./ErrorMessage";
import CoursesModal from "./CoursesModal";



const Modulet = () => {
    
    const [courses,setCourses] = useState(null);
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

            const response =await fetch(`/courses/${id}`,requestOptions);
            if (!response.ok){
                setErrorMessage("Error al eliminar curso")
            }

            getCourses(response);
    };

    const getCourses = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/courses",requestOptions);
        if (!response.ok){
            setErrorMessage("No se pudo cargar el curso");
        }else{
            const data = await response.json();
            setCourses(data);
            setLoaded(true);
        }
    };

    useEffect(() => {
        getCourses();

    }, []);

        const handleModal = () => {
            setActiveModal(!activeModal);
            getCourses();
            setId(null);

        }

    return(
    <>
    <CoursesModal active={activeModal} handleModal={handleModal} id={id} setErrorMessage={setErrorMessage} />
    <ErrorMessage message={errorMessage}/>
       
        <div className="container mb-3">
            <br></br>
            <h1 className="text-center mb-3"> Cursos</h1>
            <div className="rows">
                <div className="">
                    <h2 className="text-center mb-3">Lista de Cursos</h2>
                    <div className="table-responsive">
                      {loaded && courses ?(
                        <table className="table table-ligth">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Descripción</th>
                                    <th>Lineas de trabajo</th>
                                    <th>Objetivos especificos</th>
                                    <th>Tipo de Curso</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course) => (    
                                <tr key={course.id}>
                                    <td> {course.name} </td>  
                                    <td> {course.description}</td>
                                    <td>{course.lines_of_work}</td>
                                    <td>{course.specific_objetives}</td>
                                    <td>{course.type_of_course}</td> 
                                    <td><bttn className='btn btn-warning btn-sm' onClick={ () => handleUpdate(course.id)} >Modificar</bttn> </td>
                                    <td><bttn className='btn btn-danger btn-sm'onClick={ () => handleDelete(course.id)} >Eliminar</bttn>   </td>
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

export default Modulet
