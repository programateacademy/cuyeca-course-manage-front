import React from 'react'

import img1 from '../assets/img1.png'
import './lesson.css'

function lesson() {
  return (
    <div className="lesson">
        <div className="lesson-body">
          <h3 className="title-course d-flex justify-content-center font-weight-bold">Nombre del curso</h3>
          <div className="lesson-name d-flex align-items-center">
            <img src={img1} alt='imagen_leccion1'/>
            <h4 className='font-weight-bold'>Nombre de la Lección</h4>
          </div>
          <div className="lesson-description d-flex">
            <h5 className="description">Descripción</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="lesson-resources d-flex">
            <h5 className="resources">Recursos</h5>
            <button type="button" class="btn btn-outline-primary"><i class="bi bi-filetype-pdf p-3"></i></button>
            <button type="button" class="btn btn-outline-danger"><i class="bi bi-youtube p-3"></i></button>
            <button type="button" class="btn btn-outline-success"><i class="bi bi-link-45deg p-3"></i></button>
          </div>
        </div>  
    </div>
  )
}

export default lesson