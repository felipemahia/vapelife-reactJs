import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ItemProduct.css'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom';


const ItemProduct = ({ info }) => {
    return (
        <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="">
                            E {/* Acá va un logo de un equipo que tengo que hacer */}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={info.modelo}
                    subheader={info.marca}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={info.img}
                    alt={info.alt}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {info.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Box>
                    <Button size= "small" variant="contained" color="secondary">
                        <Link style = {{textDecoration: "none", color: 'white'}} to={`/detalle/${info.id}`} >Ver más</Link>
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </div>
    );
}

export default ItemProduct;