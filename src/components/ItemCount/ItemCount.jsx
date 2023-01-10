import { Box, Button } from "@mui/material";
import { useState } from "react";

const ItemCount = ({ stock, onAdd }) => {

    const [counter, setCounter] = useState(0)

    const oneMore = () => {
        setCounter(counter + 1)
    }
    const oneLess = () => {
        setCounter(counter - 1)
    }
    return (
        <Box>
            <Button size= "small" variant="outlined" onClick={oneLess} disabled={counter <= 0}>-</Button>
            <Button size= "small" disabled={counter <= 0} variant="contained" color="secondary" onClick={()=> onAdd(counter)}>Agregar {`${counter}`} al carrito</Button>
            <Button size= "small" variant="outlined" onClick={oneMore} disabled={counter === stock}>+</Button>
        </Box>
    )
}


export default ItemCount;