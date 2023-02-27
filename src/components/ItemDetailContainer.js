import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ItemDetali } from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams();

    useEffect(() => {
        const getProducts = async () => {
            const res = await fetch(`https:fakestoreapi.com/products/${id}`)
            const data = await res.json() 
            setProduct(data)
        };

        getProducts();
    
    }, [id]);

    return (
        <div className="detailContainer">
            <ItemDetali product={product} />
        </div>
    )
}

export default ItemDetailContainer