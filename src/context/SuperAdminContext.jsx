import React, { createContext, useEffect, useState } from "react";

export const SuperAdminContext = createContext();

export const SuperAdminProvider = (props) => {
    const[token,setToken] = useState(localStorage.getItem("awesome token"));

    useEffect(()=>{
        const fetchSuperAdmin = async () => {
            const requestOptions = {
                method: "GET",
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer" + " " + token,
                },
            };
            const response = await fetch("/api/superadmin/me", requestOptions);
            if(!response.ok){
                setToken(null);
            }
            localStorage.setItem("awesome token", token);
        };
        fetchSuperAdmin()
    }, [token]);
    return (
        <SuperAdminContext.Provider value={[token,setToken]}>
            {props.children}
        </SuperAdminContext.Provider>
    )

};