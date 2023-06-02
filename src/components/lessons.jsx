import React, { useEffect, useState } from 'react';
import lesson from './lesson';

const Lesson= () => {
    const [lessons, setLessons] = useState([]);
    const getAllLessons = async () => {
        const requestOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch("/lessons/{id}", requestOptions);
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
                            < Lesson name={ lesson.name} url={ 'http://localhost:3000/lesson/{id}'} description={lesson.description} video={lesson.video} />
                        </div>
                    ))
                }
            </div>
        </div>
      )
    }
    
    export default Lesson