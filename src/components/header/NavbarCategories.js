import React from "react";
import '../styles/header.css'
import { NavLink } from "react-router-dom"


const NavbarCategories = () => {
    const categories = [
        {id:1, nombre: "Inicio", route: '/'},
        {id:2, nombre: "Cocina", route: '/categories/jewelery'},
        {id:3, nombre: "Dormitorio", route: "/categories/men's clothing"},
        {id:4, nombre: "Baño", route:"/categories/women's clothing"}
    ];

    return (

        <>
            {categories.map((category) => {
                return (
                <div className="navCategory">
                    <li className="navCategory-list"> <NavLink  className="navCategory-link" key={category.id} to={category.route}>{category.nombre}</NavLink></li>
                </div>
                )
            })}
        </>
    )
}
export default NavbarCategories
