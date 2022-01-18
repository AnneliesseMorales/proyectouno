import React from 'react';
import '../assets/styles/navComponent.css'
import { Link } from 'react-router-dom';

const NavComponent =()=>{
    return (
        <div className ="navContainer">
            <div>
                <p>Brand</p>
            </div>
            <div className = "nav-menu">
                <Link to = "/">Home</Link>
                <Link to = "/Products">Products</Link>
                <p>Nosotros</p>
                <p>Contacto</p>
            </div>
            <div>
                <p>Search</p>
            </div>
        </div>
    )
}
export default NavComponent;