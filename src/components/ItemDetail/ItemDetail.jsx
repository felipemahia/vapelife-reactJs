import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

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
                    <CardHeader
                        title={data.modelo}
                        subheader={data.marca}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={data.img}
                        alt={data.alt}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {data.description}
                        </Typography>
                        <div className="price"> ${data.precio}</div>
                        <div className="stock">Available stock = {data.stock}</div>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton>
                            {
                                goToCart
                                ? <Link to='/cart'>Terminar compra</Link>
                                :<ItemCount stock={data.stock} onAdd={onAdd}/>
                            }
                        </IconButton>
                    </CardActions>
                </Card>
            </>
        );
    }

export default ItemDetail; 