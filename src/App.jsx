import React, { useState, useEffect } from "react";
import Card from "./components/card";
import Cards from "./components/cards"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header";
import Register from "./components/Register";
import Login from "./components/Login";


const App = () => {
  const [message, setMessage] = useState("");

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

  return (
    <div>
      <Router>
        <Header/>

        <Routes>
          <Route path='/' element={<Cards/>}>  </Route>
          <Route path='/admin' element={<Login/>}>  </Route>
          <Route path='/foro' element={""}>  </Route>
        </Routes>
      </Router>

      
    </div>
  );
};




export default App;