import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import productos from "../../utils/mock";

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detalleId } = useParams();

    const getProductsDetail = () => new Promise(resolve => {
        setTimeout(() => resolve(productos), 3000);
    });

    useEffect(() => {
        const getProductsDetail = new Promise((resolve) => {
            setTimeout(()=>{
                resolve (productos);
            })
        })
        getProductsDetail.then(res=>setData(res.find(p => p.id === parseInt(detalleId))))
    }, [])

    return(
        
        <div className="cardDetailContainer">
        <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer; 