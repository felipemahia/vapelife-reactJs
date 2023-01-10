import React, { useState, useContext } from "react";

const CartContext = React.createContext('');
export const useCartContext = () => useContext(CartContext);
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log('carrito: ', cart);

    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    }

    const deleteElement = (id) => {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }
    const clearCart = () => setCart([]);
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    return (
        <CartContext.Provider value={{
            //cart,
            clearCart,
            isInCart,
            removeProduct,
            deleteElement,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;