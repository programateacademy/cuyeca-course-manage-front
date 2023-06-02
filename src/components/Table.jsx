import React, { useContext, useEffect, useState } from "react";
import moment from "moment";
import ErrorMessage from "./ErrorMessage";
import {SuperAdminContext} from "../context/SuperAdminContext";
import AdminModal from "./AdminModal";
import ".././assets/styles/Modulet.css";



const Table = () => {
    const [token] = useContext(SuperAdminContext);
    const [admins,setAdmins] = useState(null);
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
                Authorization: "Bearer " + token,
            },
        };

            const response =await fetch(`/api/admins/${id}`,requestOptions);
            if (!response.ok){
                setErrorMessage("Error al eliminar administrador")
            }

            getAdmins(response);
    };

    const getAdmins = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        };
        const response = await fetch("/api/admins",requestOptions);
        if (!response.ok){
            setErrorMessage("No se pudo cargar el administrador");
        }else{
            const data = await response.json();
            setAdmins(data);
            setLoaded(true);
        }
    };

    useEffect(() => {
        getAdmins();

    }, [] );

        const handleModal = () => {
            setActiveModal(!activeModal);
            getAdmins();
            setId(null);

        }

   return(
    <>

    <AdminModal active={activeModal} handleModal={handleModal} token={token} id={id} setErrorMessage={setErrorMessage} />
    <ErrorMessage message={errorMessage}/>
       {loaded && admins ?(
        <table className="table table-ligth">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Constraseña</th>
                <th>Última Actualización</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            {admins.map((admin)=> (

            <tr key={admin.id}>
                <td> {admin.username}</td>  
                <td> {admin.password}</td>
                <td>{moment(admin.date_last_updated).format("MMM Do YY")}</td>
                <td><bttn className='btn btn-warning btn-sm' onClick={ () => handleUpdate(admin.id)} >Modificar</bttn> </td>
                <td><bttn className='btn btn-danger btn-sm' onClick={ () => handleDelete(admin.id)}>Eliminar</bttn>   </td>
            </tr>

            ) )}
            
        </tbody>
    </table>

       ): <p>Cargando</p> }
    
       
        </>
   );

};

export default Table;