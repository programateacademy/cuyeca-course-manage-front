import React, { useContext, useEffect, useState } from "react";
import Login from "../components/Login"
import Board from "../components/Board"
import { SuperAdminContext } from "../context/SuperAdminContext";
import Table from "./Table";
import Modulet from "./Modulet";


const Page = () => {
    const [message, setMessage] = useState("");
    const [token] = useContext(SuperAdminContext);
    const[ userType, setUserType] = useState("");

    const getWelcomeMessage = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch("/api", requestOptions);
        const data = await response.json();

        if (!response.ok) {
            console.log("something messed up");
        } else {
            setMessage(data.message);
        }
    };

    useEffect(() => {
        getWelcomeMessage();
    }, []);

    const handleLoginData = (loginData) => {
        setUserType(loginData)
    }

    return (
        <div>
            <Board title={message}/>
            <div className="columns">
                    {
                        !token ? (
                            <div className="columns">
                                <Login onUserType={handleLoginData}/>
                            </div>

                        ):(
                           userType === "superAdmin" ? <Table/>: <Modulet/>
                        )}
            </div>
        </div>

    )

};

export default Page;