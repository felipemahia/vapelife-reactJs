import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => { 
const {totalProducts} = useCartContext()

    return(
        <>
        <ShoppingCart></ShoppingCart>
        <span>{totalProducts()|| ''}</span>
        </>
    )
}

export default CartWidget 