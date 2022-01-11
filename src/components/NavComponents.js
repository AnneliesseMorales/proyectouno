import React from 'react';
import '../assets/styles/navComponent.css'

const NavComponent =()=>{
    return (
        <div className ="navContainer">
            <div>
                <p>Brand</p>
            </div>
            <div className = "nav-menu">
                <p>Home</p>
                <p>Productos</p>
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