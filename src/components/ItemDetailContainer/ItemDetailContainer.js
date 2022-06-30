import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";




export default function ItemDetailContainer() {
    const { productId } = useParams();
    const [item, setItem] = useState([])



    useEffect(() => {
        const db = getFirestore();
        const product = doc(db, "productos", productId)
        getDoc(product).then(snapshot => {
            setItem({ id: product.id, ...snapshot.data() });
        })


        // eslint-disable-next-line
    }, [productId])


    return (
        <div className="detalleRow">
            <ItemDetail item={item} />
        </div>
    )

}