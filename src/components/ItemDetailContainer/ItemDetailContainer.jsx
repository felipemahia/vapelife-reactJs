import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import { ShoppingBag } from '@mui/icons-material';

const ItemDetailContainer = () => {
    return (
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
                title="Stick Prince"
                subheader="Smok"
            />
            <CardMedia
                component="img"
                height="194"
                image="../img/1.jpg"
                alt="Equipo 1"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Una combinación perfecta de portabilidad y potencia, el nuevo SMOK Stick Prince y el TFV12 Prince Tank son una combinación ganadora para todos.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <ShoppingBag />
                </IconButton>
            </CardActions>
        </Card>
    );
}


{/* <Grid container spacing={2}>
    <Grid item xs={6} md={8}>
        <Item>xs=6 md=8</Item>
    </Grid>
</Grid> */}

export default ItemDetailContainer;