import './ItemProduct.css'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import React from 'react';


const ItemProduct = ({ info }) => {

    const { modelo, marca, img, alt, id, precio } = info
    return (
        <div className='item-product'>
            <img className='productImage' src={img} alt={alt} />
            <h1 className='title'>{marca}</h1>
            <h2 className='secondTitle'>{modelo}</h2>
            <span className='price'>${precio}</span>
            <Button size="small" variant="contained" color="secondary">
                <Link style={{ textDecoration: "none", color: 'white' }} to={`/detalle/${id}`} >Ver más</Link>
            </Button>
        </div>
    )
}

export default ItemProduct;