import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


export const ItemList = () => {
    
    const [products,setProducts] = useState([]);
    const {name} = useParams();
    const URL = name ? (`https:fakestoreapi.com/products/category/${name}`) : ('https:fakestoreapi.com/products');
    
    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(URL)
            const data = await res.json() 
            setProducts(data)
        }
        getProducts();

    }, [name]);

    return (
        <>
            {
                products.map((product) =>
                (<div key= {product.id} className="cardProducts">
                    <img className="cardProducts-img" src={product.image} alt={product.title} />
                    <h2 className="cardProducts-text">{product.title}</h2>
                    <p>${product.price}</p>
                </div>               
                ))
            }
        </>
    )
}