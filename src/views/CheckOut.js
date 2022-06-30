import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext";





export default function CheckOut() {
    const [data, setData] = useState();
    const { cartItems, removeFromCart, emptyCart } = useContext(CartContext)
    const [orderId, setOrderId] = useState();
    const [itemsComprados, setItemsComprados] = useState()
    const total = [0]
    const [precio, setPrecio] = useState();

    const totalPrice = () => {
        cartItems.map((item) =>
            total.push((+item.price * +item.quantity))
        )

        return total.reduce((initial, current) => {
            return initial + current
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = {
            buyer: data,
            items: cartItems,
            total: total.reduce((initial, current) => {
                return initial + current
            }),
        }
        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(({ id }) => {
            setOrderId(id);
            emptyCart();
        })
        setItemsComprados(cartItems)
        setPrecio(order.total)

    }




    return (
        (!orderId) ? <div className="checkout">
            <h1>CheckOut</h1>
            <form onSubmit={handleSubmit} className="formulario">
                <input
                    name="nombre"
                    placeholder="Nombre y Apellido"
                    type="text"
                    onChange={handleChange} />
                <input
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handleChange} />
                <input
                    name="email"
                    placeholder="Repetir Email"
                    type="email"
                    onChange={handleChange} />
                <input
                    name="direccion"
                    placeholder="Dirección"
                    type="text"
                    onChange={handleChange} />
                <input
                    name="cp"
                    placeholder="Código Postal"
                    type="text"
                    onChange={handleChange} />

                <button className="finalizar"
                    type="submit">Comprar!</button>
            </form>
            <div className="carritoView">
                <div className="productosCheckOut">
                    {(cartItems.length > 0) ? cartItems.map((cartItem) => <div key={cartItem.id} className="cartItem">
                        <img src={cartItem.imagen} alt="" />
                        <h1>{cartItem.name}</h1>
                        <p>cantidad: {cartItem.quantity}</p>
                        <p>{cartItem.price} US$</p>
                        <button onClick={() => removeFromCart(cartItem.id)}>Eliminar</button>
                    </div>)
                        : <p className="carroVacio">Su carrito está vacio </p>}
                </div>
                <div className="totalCheckOut">
                    {(cartItems.length > 0) ? (cartItems.length >= 1) ? <p>Total: {totalPrice()} US$</p> : <p>{totalPrice() / 2}US$</p> : <p>0 US$</p>}
                </div>
            </div>
        </div> :

            <div className="pedidoRealizado">
                <h1> Su pedido ha sido realizado con éxito!</h1>
                <div className="pedidoInfo">
                    <div className="pedidoComprador">
                        <h3>Tus datos:</h3>
                        <p>{data.nombre}</p>
                        <p>{data.email}</p>
                        <p>{data.direccion}</p>
                    </div>
                    <div className="pedidoItems">
                        <h3>Tu compra:</h3>
                        {itemsComprados.map((item => {
                            return <p key={item.id}>{item.name} ({<span>{item.quantity}</span>})</p>
                        }))}
                        <p>Nro de orden: {orderId}</p>
                    </div>
                </div>
                <h2>Precio final : {precio} US$ </h2>
            </div>

    )
}