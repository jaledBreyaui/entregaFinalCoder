import { createContext, useState } from "react";

const CartContext = createContext({});
const { Provider } = CartContext;



const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);



    const addToCart = (item, count) => {
        if (isInCart(item.id)) {
            cartItems.filter((cartItem) => cartItem.quantity = +cartItem.quantity + count)
        } else {
            setCartItems([...cartItems, { ...item, quantity: count }])
        }

    }

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== id))

    }
    const emptyCart = () => {
        setCartItems([])
    }
    const isInCart = (id) => {
        return cartItems.find(item => item.id === id)
    }




    return (
        <Provider value={{
            addToCart,
            removeFromCart,
            emptyCart,
            isInCart,
            cartItems,
        }}>
            {children}
        </Provider>
    )
}

export { CartProvider, CartContext }