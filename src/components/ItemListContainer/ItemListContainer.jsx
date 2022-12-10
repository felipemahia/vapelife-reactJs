import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'


const productos = [
    {
        id: 1,
        marca: "SMOK",
        modelo: "NORD4",
        precio: 1100,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Nord Pod/1.jpg",
        description: "Estilo POD, lo más sencillo pero eficiente",
        alt: "Equipo de inicio, de marca smok modelo Nord 4"
    },
    {
        id: 2,
        marca: "SMOK",
        modelo: "VAPEPEN22",
        precio: 1500,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/VapePen 22/1.jpg",
        description: "Simple pero elegante",
        alt: "Equipo de inicio, de marca Smok, modelo VapePen 22"
    },
    {
        id: 3,
        marca: "SMOK",
        modelo: "STICKPRINCE",
        precio: 2000,
        categoria: "principiantes",
        img: "./imagenes/1 Principiantes/Smok Stick Prince/1.jpg",
        description: "Kit de inicio... a lo grande",
        alt: "Equipo de inicio, de marca Smok, modelo Prince"
    },
]

export const ItemListContainer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos)
            }, 3000);
        });
            getData.then(res => setData(res));
        }, []);
        

        const onAdd = (quantity) => {
            console.log(`Compraste ${quantity} unidades`);
        }

        return (
            <div className="cardListContainer">
                {/* <ItemCount onAdd={onAdd} /> */}
                <ItemList data={data} />
            </div>
        );
    }