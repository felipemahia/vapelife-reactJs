import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if (categoriaId) {
        const queryFilter = query(queryCollection, where('categoria', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))));
            } else{
                getDocs(queryCollection)
                .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}))));
            }
    }, [categoriaId])

    return (
        <Grid className="cardContainer" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <ItemList data={data} />
        </Grid>
    );
}