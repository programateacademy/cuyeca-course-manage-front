import React from "react";
import {Link} from 'react-router-dom'

import slogo from '../assets/slogo.svg'

import './footer.css'

const Footer =()=>{

    return(
        <div>
            <footer className='text-black py-4 bg-light border-top p-3'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                            <img src={slogo} className='mx-2' height='100'/>
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='orange-text font-weight-bold mb-4 text-center'>Dirección</li>
                            <li className='text-center'>Tv. 73d Bis A #68 36 <br></br> SUR, Bogotá</li>
                            
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='orange-text font-weight-bold mb-4 text-center'>Contactos</li>
                            <li className='text-center'> olbellop@pedagogica.edu.co <br></br>+57 (601) 7769044</li>

                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='orange-text font-weight-bold mb-4 text-center'>Redes Sociales</li>
                            <li className='d-flex justify-content-center'>
                            <i className="bi bi-facebook p-2"></i>
                            <i className="bi bi-twitter p-2"></i>
                            </li>

                        </ul>

                    </nav>
                </div>
            </footer>
        </div>
    )

}

export default Footer