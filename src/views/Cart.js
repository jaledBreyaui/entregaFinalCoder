import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


export default function Cart() {
    const { cartItems, removeFromCart, emptyCart } = useContext(CartContext);
    const totalPrice = [];

    const total = () => {
        cartItems.map((item) =>
            totalPrice.push((+item.price * +item.quantity))
        )
        let sum = 0
        for (let i = 0; i < totalPrice.length; i++) {
            sum += totalPrice[i]
        }
        if (sum > 0)
            return <span className="precioTotal">Total: {sum} US$</span>
    }

    return (
        <div className="carrito">
            <div>
                {cartItems.map((cartItem) => <div key={cartItem.id} className="cartItem">
                    <img src={cartItem.imagen} alt="" />
                    <h1>{cartItem.name}</h1>
                    <p>cantidad: {cartItem.quantity}</p>
                    <p>{cartItem.price} US$</p>
                    <button onClick={() => removeFromCart(cartItem.id)}>Eliminar</button>
                </div>)
                }
            </div>
            <div className="comprar">
                {total()}
                {cartItems.length > 0 && <Link to={"/checkout"}> <button>Finalizar Compra</button> </Link>}

            </div>
            {(cartItems.length > 0) ?
                <button onClick={emptyCart} className="vaciarCarro">Vaciar Carro</button> : <p className="vaciarCarro">Tu carro esta vacio</p>
            }
        </div >
    )
}