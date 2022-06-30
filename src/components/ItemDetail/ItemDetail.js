import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import React from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ item }) {
    const { addToCart, isInCart } = React.useContext(CartContext)
    const [count, setCount] = React.useState(1)

    const estaEnCarrito = (item) => {
        console.log(item);
        if (isInCart(item.id)) {
            return <Link to="../cart">
                <button> Ir al carrito</button>
            </Link>
        } else {
            return <ItemCount
                stock={item.stock}
                count={count}
                setCount={setCount}
                onSubmit={() => addToCart(item, count)}
            />
        }
    }


    return (
        <div className="itemdetailpadre" >
            <h1>{item.name}</h1>
            <img src={item.imagen} alt="" />
            <p className="dd">{item.descripcion}</p>
            <p className="dp">{item.price} US$</p>
            <div className="cc">
                {estaEnCarrito(item)}
            </div>
        </div>
    )
} 