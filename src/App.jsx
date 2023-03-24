import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import Cards from "./components/cards"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header";
// import Login from "./components/Login";
import Carousel from "./components/carousel"
import Modulet from "./components/Modulet"

import SuperAdmin from "./components/SuperAdmin";
import Lesson from "./components/lesson"
import "./App.css"
import Createlesson from "./components/Createlesson";



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
    <div className="app-container">

      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Carousel/>}>  </Route>
          <Route path='/home-lessons' element={<Cards/>}>  </Route>
          <Route path='/admin' element={<SuperAdmin/>}>  </Route>
          <Route path='/foro' element={""}>  </Route>
          <Route path='/lesson' element={<Lesson/>}> </Route>
        </Routes>

        {/* <Modulet/> */}
        <Createlesson/>
        <Footer/>
      </Router>

    </div>
  );
};




export default App;




