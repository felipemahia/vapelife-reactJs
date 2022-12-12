import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import productos from "../../utils/mock";


/* const productos = [
    {
        id: 1,
        marca: "SMOK",
        modelo: "NORD4",
        precio: 1100,
        stock: 22,
        type: "equipos",
        img: "./imagenes/1 Principiantes/Nord Pod/1.jpg",
        description: "Estilo POD, lo más sencillo pero eficiente",
        alt: "Equipo de inicio, de marca smok modelo Nord 4"
    },
    {
        id: 2,
        marca: "SMOK",
        modelo: "VAPEPEN22",
        precio: 1500,
        stock: 32,
        type: "equipos",
        img: "./imagenes/1 Principiantes/VapePen 22/1.jpg",
        description: "Simple pero elegante",
        alt: "Equipo de inicio, de marca Smok, modelo VapePen 22"
    },
    {
        id: 3,
        marca: "SMOK",
        modelo: "STICKPRINCE",
        precio: 2000,
        stock: 18,
        type: "equipos",
        img: "./imagenes/1 Principiantes/Smok Stick Prince/1.jpg",
        description: "Kit de inicio... a lo grande",
        alt: "Equipo de inicio, de marca Smok, modelo Prince"
    },
    {
        id: 4,
        marca: "ICE MONSTER",
        modelo: "MIXED BERRY ICE",
        precio: 1800,
        type: "liquidos",
        img: "./imagenes/Eliquids/Ice Monster/ice monster 1.png",
        description: "Sabrosos frutos rojos congelados",
        alt: "Eliquid de marca Ice Monster con sabor a frutos rojos frescos"
    },
    {
        id: 5,
        marca: "ICE MONSTER",
        modelo: "MANDARINA Y GUAYAVA",
        precio: 1800,
        type: "liquidos",
        img: "./imagenes/Eliquids/Ice Monster/ice monster 2.png",
        description: "Combinación de mandarina y guayaba refrescante",
        alt: "Eliquid de marca Ice Monster con sabor a mandarina y guayava con un golpe fresco"
    },
    {
        id: 6,
        marca: "ICE MONSTER",
        modelo: "MELON COLADA",
        precio: 1800,
        type: "liquidos",
        img: "./imagenes/Eliquids/Ice Monster/ice monster 3.jpg",
        description: "Sabor a melón, con frutas tropicales y un golpe fresco",
        alt: "Eliquid de marca Ice Monster con sabor a melón"
    },
    {
        id: 7,
        marca: "ICE MONSTER",
        modelo: "MELON COLADA",
        precio: 1800,
        type: "liquidos",
        img: "./imagenes/Eliquids/Ice Monster/ice monster 3.jpg",
        description: "Sabor a melón, con frutas tropicales y un golpe fresco",
        alt: "Eliquid de marca Ice Monster con sabor a melón"
    },

] */

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