import React from "react";
import {Link} from 'react-router-dom'

import slogo from '../assets/slogo.svg'

const Footer =()=>{

    return(
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md3 d-flex aling-items-center justyfy-content-center'>
                            <img src={slogo} className='mx-2'/>
                        </Link>

                    </nav>
                </div>
            </footer>
        </div>
    )

}

export default Footer