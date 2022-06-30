import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext";

export default function CartWidget() {
    const { cartItems } = useContext(CartContext)
    const cantidad = []


    const totalItems = () => {
        cartItems.map((item) => cantidad.push(+item.quantity))
        let sum = 0;
        for (let i = 0; i < cartItems.length; i++) {
            sum = sum + cantidad[i]
        }
        return sum
    }

    console.log(totalItems());



    return (
        <Link to="cart">
            <div className="cartIcon">
                <img src="../carrito.png" alt="carrito" />
                {cartItems.length > 0 && <span>({totalItems()})</span>}
            </div>
        </Link>
    )
}