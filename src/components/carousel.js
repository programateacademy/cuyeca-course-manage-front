import React from 'react'
import { Link } from "react-router-dom";
import '../assets/styles/carousel.css'

import banner1 from '../assets/banner1.png'
import banner2 from '../assets/banner2.png'
import banner3 from '../assets/banner3.png'
import banner4 from '../assets/banner4.png'

const carousel = () => {
  return (
    <div className='carousel-container'>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100 m-0" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100 m-0" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100 m-0" alt="..."/>
                </div>
                <div className="carousel-item">
                    <Link to="/home-lessons"><img src={banner4} className="d-block w-100 m-0" alt="..." /></Link>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
  )
}

export default carousel;