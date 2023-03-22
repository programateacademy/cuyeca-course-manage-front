import React from 'react';
import Card from "./card";

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const cards = [
    {
        id: 1,
        title: "Leccion 1",
        image: img1,
        text: 'Esta es la primera lección, trata de:',
        url: 'http://localhost:3000/lesson'
    },
    {
        id: 2,
        title: "Leccion 2",
        image: img2,
        url: 'http://localhost:3000/lesson'
    },
    {
        id: 3,
        title: "Leccion 3",
        image: img3,
        url: 'http://localhost:3000/lesson'
    }
]

function Cards() {

    return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <Card title={card.title} imageSource={card.image} url={card.url} text={card.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards