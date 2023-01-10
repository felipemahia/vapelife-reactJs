import React, { useState, useEffect, } from "react";
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

    const [data, setData] = useState({})
    const { detalleId } = useParams();

    const getItem = async () => {
        const database = getFirestore();
        const docRef = doc(database, "productos", detalleId)
        const docSnap = await getDoc(docRef)
        const product = { ...docSnap.data(), id: docSnap.id }
        return product
    }
    useEffect(() => {
        const ItemAwait = async () => {
            try {
                const responseLog = await getItem()
                setData(responseLog)
            }
            catch (error) {
                console.log(error)
            }
        }
        ItemAwait()
    }, [detalleId])

    return (
        <div className="cardDetailContainer">
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer; 