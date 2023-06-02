import React from 'react'
import PropTypes from 'prop-types'
import img1 from '../assets/img1.png'
import '../assets/styles/lesson.css'

function lesson({name,description,video,resources}) {
  return (
    <div className="lesson">
        <div className="lesson-body">
          <h3 className="title-course d-flex justify-content-center font-weight-bold">Diplomado en Seguridad social</h3>
          <div className="lesson-name d-flex align-items-center">
            <img src={img1} alt='imagen_leccion1'/>
            <h4 className='font-weight-bold'>{name}</h4>
          </div>
          <div className="lesson-description d-flex">
            <h5 className="description"> {description}</h5>
            <p>.</p>
          </div>
          <div className="lesson-resources d-flex">
            <h5 className="resources">Recursos</h5>
            <button type="button" className="btn btn-outline-primary"><i class="bi bi-filetype-pdf p-3"></i></button>
            <button type="button" className="btn btn-outline-danger"><i class="bi bi-youtube p-3"></i></button>
            <button type="button" className="btn btn-outline-success"><i class="bi bi-link-45deg p-3"></i></button>
            <button type="button" className="btn btn-outline-info">Siguiente Lección  <i class="bi bi-caret-right-fill"></i></button>
          </div>
        </div>  
    </div>
  )
}

lesson.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default lesson