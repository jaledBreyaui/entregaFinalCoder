

import Item from "../Item/Item";

export default function ItemList({ products, className }) {

    return (
        <div className={className}>
            <h2>Productos</h2>
            <div className="item-padre">
                {products.map((prod) => <Item item={prod} key={prod.id} />)}
            </div>
        </div>
    )
}