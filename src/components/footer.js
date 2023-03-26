import React from "react";
import {Link} from 'react-router-dom'

import slogo from '../assets/slogo.svg'

import '../assets/styles/footer.css'

const Footer =()=>{

    return(
        <div className="footer-container">
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
                            <li className='text-center'> cuyeka@gmail.com <br></br>+57 (314) 2302744</li>

                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='orange-text font-weight-bold mb-4 text-center'>Redes Sociales</li>
                            <li className='d-flex justify-content-center'>
                            <a href="https://www.facebook.com/cuyeca"><i class="bi bi-facebook p-2"></i></a>
                            <a href="https://twitter.com/cuyeca?s=20"><i class="bi bi-twitter p-2"></i></a>
                            </li>

                        </ul>

                    </nav>
                </div>
            </footer>
        </div>
    )

}

export default Footer