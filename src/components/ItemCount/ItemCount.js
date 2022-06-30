export default function ItemCount({ stock, count, setCount, onSubmit }) {


    const restar = () => {
        setCount(count - 1)
        if (count < 1) {
            setCount(0)
        }
    }

    const sumar = () => {
        if (count < stock)
            setCount(count + 1)
    }

    return (
        <>
            <div className="contador">
                <button onClick={restar}>-</button>
                <span>{count}</span>
                <button onClick={sumar}>+</button>
            </div>
            <div className="addTo">
                <button onClick={onSubmit} > Agregar al carrito ({count}) </button>
            </div>
        </>
    )
}