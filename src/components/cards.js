import React, { useEffect, useState } from 'react';
import Card from "./card";

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import card from './card';

const cards = [
    {
        id: 1,
        title: "Lección 1",
        image: img1,
        text: 'Esta es la primera lección, trata de:',
        url: 'http://localhost:3000/lesson'
    },
    {
        id: 2,
        title: "Lección 2",
        image: img2,
        url: 'http://localhost:3000/lesson'
    },
    {
        id: 3,
        title: "Lección 3",
        image: img3,
        url: 'http://localhost:3000/lesson'
    }
]

const Cards= () => {
    const [lessons, setLessons] = useState([]);
    const getAllLessons = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("/lessons", requestOptions);
        const fetchedLessons = await response.json();

        setLessons(fetchedLessons);

        if (!response.ok) {
            console.log("ocurrió un error al traer las lecciones")
        } else {
            console.log("las lecciones fueron traidas con exito",fetchedLessons)
        }

    };

    useEffect(() => {
        getAllLessons();

    }, []);

    return (
        
    <div className="container d-flex justify-content-center align-items-center h-100">
        
        <div className="row">
        <h1 className='title'>Diplomado en seguridad social</h1>
            {
                lessons.map( lesson => (
                    <div className="col-md-4" key={ lesson.id}>
                        < Card title={ lesson.name} imageSource={img3} url={ 'http://localhost:3000/lesson/'} text={lesson.description} video={lesson.video} resources={lesson.resources}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards