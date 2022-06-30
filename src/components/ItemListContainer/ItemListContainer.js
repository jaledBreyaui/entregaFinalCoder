
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";


export default function ItemListContainer() {
    const { categoryId } = useParams();
    const [listaGuitarras, setListaGuitarras] = useState([])



    useEffect(() => {
        //producto
        const db = getFirestore();
        // const product = doc(db, "productos", "5kyrCRCmISmv2OfVqsgu")
        // getDoc(product).then(snapshot => {
        //     if (snapshot.exists()) {
        //         console.log(snapshot.data());
        //     }
        // })

        //collection
        const products = collection(db, "productos")
        getDocs(products).then(snapshots => {
            setListaGuitarras(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })

        //collection con filtros
        if (categoryId) {
            const q = query(collection(db, "productos"), where("categoria", "==", categoryId))
            getDocs(q).then(snapshots => {
                setListaGuitarras(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })
        }
    }, [categoryId])

    return (
        <div className="rowPadre">
            <ItemList products={listaGuitarras} className={"row"} />
        </div>
    )
}