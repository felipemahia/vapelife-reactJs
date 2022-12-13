import React from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail =({ data }) => {
    return(
            <>
                <Card className="productDescription" sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="">
                                E {/* Acá va un logo de un equipo que tengo que hacer */}
                            </Avatar>
                        }
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
                            <ItemCount />
                        </IconButton>
                    </CardActions>
                </Card>
            </>
        );
    }

export default ItemDetail; 