import React from "react";
import './styles/itemDetailContainer.css'
import { Link } from "react-router-dom";


export const ItemDetali = ({product}) => {
    return (
            <div key= {product.id} className="datailProducts">
                <img className="detailProducts-img" src={product.image} alt={product.title} />
                <div className="detailProducts-text">
                    <h2 className="detailProducts-title">{product.title}</h2>
                    <p className="detailProducts-price">${product.price}</p>
                    <Link to={'/'}>
                    <button className="cardProducts-buttom">Volver a la tienda</button>
                    </Link>
                </div>
            </div>
        
    )
}