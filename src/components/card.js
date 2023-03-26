import React from 'react'
import PropTypes from 'prop-types'

import '../assets/styles/cards.css'

function card({title, imageSource, text, url}) {
  
  return (
    <div className="card text-center">
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <div className="overflow">
              <img src={imageSource} alt="imagen" className="card-img" />
            </div>
            <h5 className="card-text">Descripción</h5>
            <a href={url} className="btn border-0"><p className="card-text1">
              {
                text ? text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
              </p></a>
        </div>
    </div>
  )
}

card.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default card