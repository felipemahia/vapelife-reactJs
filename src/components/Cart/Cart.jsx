import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const Cart = (condition) => {
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


export default Cart; 




























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

    if(cart.length === 0) {
        return(
            <>
            <div>
                <h1>
                    No hay elementos en tu carrito :(
                        <Link to='/'> Hacé tu compra ;)</Link>
            </h1>
                </div>
            </>
        )
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