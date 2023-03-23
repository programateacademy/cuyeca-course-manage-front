import React from 'react';
import { Link } from 'react-router-dom';
import Logoc from "../assets/Logoc.svg";
import '../App.css';

const Header =() => {
    return (
        <div>   
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand"  to='/'>
                            <img src={Logoc} alt="Logo" className="imagenheader img-fluid " width="506" height="506" />
                    </Link>
                    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                       <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" style={{color:'hsl(33, 200%, 59%)', fontWeight: 'bold'}}>
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                       </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item p-3">
                            <bttn className='btnheader' ><Link className="nav-link active" aria-current="page" to='/admin'>Acceso de administradores</Link></bttn>
                        </li>
                        <li className="nav-item p-3">
                            <bttn className='btnheader' > <Link className="btnheader nav-link" to='/foro'>Foro</Link> </bttn>
                        </li>
                    </ul>
                    </div>
                </div>
           </nav>
        </div>
    )
}

export default Header;