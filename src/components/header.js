import React from 'react';
import { Link } from 'react-router-dom';
import Logoc from "../assets/Logoc.svg";

const Header =() => {
    return (
        <div>   
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={Logoc} alt="Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto">
                        <button class='btnheader' ><Link className="nav-link active" aria-current="page" to='/admin'>Acceso de administradores</Link></button>
                        <Link className="nav-link" to='/foro'>Foro</Link>

                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;