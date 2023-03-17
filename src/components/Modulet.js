import React from "react";
import ".././assets/styles/Modulet.css";


function Modulet() {

    return(
        <div className="container mb-3">
            <br></br>
            <h1 className="text-center mb-3"> Modulo </h1>
            <div className="rows">
                <div className="">
                    <h3 className="text-center mb-3">Cursos</h3>
                    <table className="table table-ligth">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Lineas de trabajo</th>
                                <th>Objetivos especificos</th>
                                <th>Tipo de Curso</th>
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
                <section className="form-main"> 
                    <div className="form-content">           
                        <div className="box">
                            <h3 >Formulario</h3>
                            <form action="">
                                <input type="text" placeholder="nombre" className="input-control"/>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Descripción</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Lineas de trabajo</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Objetivos especificos</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label >Tipo de curso</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                <bttn className='btnmodule' >Enviar</bttn>
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
