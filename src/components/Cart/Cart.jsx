import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import ItemCart from '../ItemCart/ItemCart'
import ModalCustom from "../Modal/Modal";





const Cart = () => {
    const { cart, totalPrice } = useCartContext();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    /* const [modal, setModal] = useState(false);
    const abrirCerrarModal = () => {
        setModal(!modal);
    } */

    if (cart.length === 0) {
        return (
            <>
                <div>
                    <h1 className="titulo">No hay elementos en tu carrito :(</h1>
                    <div className="centrarBtn">
                        <Button className="boton" size="big" variant="outlined" color="primary"><Link to='/'>Hacé click acá para realizar tu compra ;)</Link></Button>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="eliminarFondoBlanco">
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
                <h1 className="titleCartPrice">
                    Total: {totalPrice()}
                </h1>
            </div>
            <div className='modalCustomBtn'>
                <ModalCustom  open={open} handleClose={handleClose} />
            </div>
        </>
    )
}





export default Cart;













/* const Cart = (condition) => {
    const { cart, totalPrice, removeProduct, clearCart } = { useCartContext }

    condition = cart.length === 0

    return (
        <div>
            {condition &&
                <div>
                    <h2>No hay items en el carrito :(</h2>
                    <Link to={"/"} ><Button> Realiza tu compra ;) </Button></Link>
                </div>

            }
            {!condition &&
                <>
                    <h1>Tú carrito :</h1>
                    <div>
                        <div className='cartContainer'>
                            {cart.map(productCart => (
                                <div className='itemCard' key={productCart.id}>
                                    <img className='itemcard_img' src={productCart.pictureUrl} alt={productCart.title} />
                                    <h1>{productCart.title}</h1>
                                    <h3>${productCart.price}</h3>
                                    <h4>Cantidad: {productCart.cantidad}</h4>
                                    <h4>Subtotal: ${productCart.cantidad * productCart.price} </h4>
                                    <button className='item-det-button' onClick={removeProduct} >Eliminar</button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3>Total: ${totalPrice()}</h3>
                            <button className='item-det-button' onClick={clearCart}>Vaciar Carrito</button>
                        </div>
                    </div>
                </>}
        </div>
    )
}


export default Cart;  */


/*     const order = {
        items: cart.map(producto => ({id: producto.id, marca: producto.marca, modelo: producto.modelo, precio: producto.precio, quantity: producto.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({id}) => console.log(id));
    }

    


    return(
        <>
        {
            cart.map(producto => <ShoppingCart key={producto.id} producto={producto}/>)
        }
        <p>
            total: {totalPrice()}
        </p>
        <Button onClick={handleClick}>Finalizar compra</Button>
        </>
    )
}

 */