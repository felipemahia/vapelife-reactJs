import React, {useState, useEffect} from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

const producto = {
        id: 1,
        marca: "SMOK",
        modelo: "NORD4",
        stock: 34,
        precio: 1100,
        categoria: "principiantes",
        img: "../../imagenes/1 Principiantes/Nord Pod/1.jpg",
        description: "Estilo POD, lo más sencillo pero eficiente",
        alt: "Equipo de inicio, de marca smok modelo Nord 4"
    }

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(()=>{
                resolve (producto);
            })
        })
        getData.then(res=>setData(res))
    }, [])

    return(
        
        <div className="cardDetailContainer">
        <ItemDetail data={data}/>
        </div>
    )
}

export default ItemDetailContainer; 