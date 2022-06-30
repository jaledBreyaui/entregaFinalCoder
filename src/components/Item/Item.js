
import { Link } from "react-router-dom";

export default function Item({ item }) {

    return (

        <div className="itemcontainer">
            <div className="item">
                <h3>{item.name}</h3>
                <Link to={`/item/${item.id}`} >
                    <img src={item.imagen} alt="" />
                </Link>
                <p>{item.price} US$</p>
            </div>
        </div >
    )
} 