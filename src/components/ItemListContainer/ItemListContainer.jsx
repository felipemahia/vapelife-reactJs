import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import productos from "../../utils/mock";

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoriaID } = useParams();
    
    const getProducts = () => new Promise(resolve => {
        setTimeout(() => resolve(productos), 3000);
    });

    useEffect(() => {
        if (categoriaID) {
            getProducts()
                .then(res => setData(res.filter(p => p.categoria === categoriaID)))
                .catch(error => console.log(error))
        } else {
            getProducts()
                .then(res => setData(res))
                .catch(error => console.log(error))
        }
        return () => setData([])
    }, [categoriaID]);


    return (
        <div className="cardListContainer">
            <ItemList data={data} />
        </div>
    );
}