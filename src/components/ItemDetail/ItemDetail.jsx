import React, { useState } from "react";
import Card from '@mui/material/Card';
import './ItemDetail.css'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { Button } from "@mui/material";

export const ItemDetail =({ data }) => {
    const [goToCart, setGoToCart] = useState(false)
    const {addProduct} = useCartContext();


    const onAdd = (quantity) =>{
        setGoToCart(true);
        addProduct(data, quantity)
        console.log(`Compraste ${quantity} unidades`);
    }


    return(
            <>
                <Card className="productDescription" sx={{ maxWidth: 550 }}>
                    <div className="detalleTitulo"> {data.marca}</div>
                    <div className="detalleSubtitulo">{data.modelo}</div>
                    <CardMedia
                        component="img"
                        height="194"
                        image={data.img}
                        alt={data.alt}
                    />
                    <CardContent>
                        <Typography variant="h6" align='center' color="black">
                            {data.description}
                        </Typography>
                        <Typography variant="h4" align='center' ><div className="price"> ${data.precio}</div></Typography>
                        <Typography variant="body2" color="text.secondary"><div className="stock">Available stock = {data.stock}</div></Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton>
                            {
                                goToCart
                                ? <Button variant="contained" color="success"><Link to='/cart'>Terminar compra</Link></Button>
                                :<ItemCount stock={data.stock} onAdd={onAdd}/>
                            }
                            
                        </IconButton>
                    </CardActions>
                    <Button  variant="outlined" color="error"><Link to='/'>Volver al inicio</Link></Button>
                </Card>
            </>
        );
    }

export default ItemDetail; 