import React, { useState, useEffect } from "react";
import Card from "./components/card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header";


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
          <Route path='/' element={<Card/>}>  </Route>
          <Route path='/admin' element={<footer/>}>  </Route>
          <Route path='/foro' element={<cards/>}>  </Route>
        </Routes>
      </Router>

      
    </div>
  );
};




export default App;