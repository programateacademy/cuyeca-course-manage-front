import React, {useEffect} from "react";
import ".././assets/styles/Modulet.css";
import axios from 'axios'


function Modulet() {
    // useEffect(() => {   
    //     fetchData()
    // }, [])
    // async function fetchData() {
    //     try {
    //       const response = await axios.get('http://127.0.0.1:8000/courses');
    //       console.log(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    // const loadData = async () =>{
    //     const answerm = await axios.get('http://127.0.0.1:8000/courses');
    //     console.log(answerm.data);
    // }
    return(
        <div className="container mb-3">
            <br></br>
            <h1 className="text-center mb-3"> Modulo </h1>
            <div className="rows">
                <div className="">
                    <h2 className="text-center mb-3">Lista de Cursos</h2>
                    <div className="table-responsive">
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
                                <tr>
                                    <td> Diplomado en derechos humanos </td>  
                                    <td> Descripcion</td>
                                    <td>Lineas de trabajo</td>
                                    <td>Objetivos especificos</td>
                                    <td>Diplomado</td> 
                                    <td><bttn className='btn btn-warning btn-sm' >Modificar</bttn> </td>
                                    <td><bttn className='btn btn-danger btn-sm' >Eliminar</bttn>   </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <section className="form-main"> 
                    <div className="form-content">           
                        <div className="box">
                            <h3 >Formulario</h3>
                            <form action="">
                                <div className="mb-3">
                                    <input type="text" placeholder="Nombre" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" placeholder="Descripción" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" placeholder="Lineas de trabajo" className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" placeholder="Objetivos especificos" className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <input type="text" placeholder="Tipo de curso" className="form-control" />
                                </div>
                                <div className="mb-3 d-flex justify-content-center align-items-center">
                                <button className='btnmodule' >Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div> 
    )

}

export default Modulet
