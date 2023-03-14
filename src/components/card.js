import React from 'react'


function card({title, imageSource}) {
  return (
    <div className="card text-center">
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <img src={imageSource} alt="imagen"/>
            <h5 className="card-text">Descripción</h5>
            <a href="#!" className="btn btn-outline-secondary border-0"><p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></a>
        </div>
    </div>
  )
}

export default card