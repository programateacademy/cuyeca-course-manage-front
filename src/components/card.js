import React from 'react'

import img1 from '../assets/img1.png'

function card() {
  return (
    <div className="card text-center">
        <div className="card-body">
            <h4 className="card-title">Nombre Modulo</h4>
            <img src={img1} alt="imagen"/>
            <h5 className="card-text">Descripción</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
  )
}

export default card