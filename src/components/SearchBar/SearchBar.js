import { useState, useEffect } from "react"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { Link } from "react-router-dom";



export default function SearchBar() {
    const [productos, setProductos] = useState();
    const [search, setSearch] = useState();
    const [response, setResponse] = useState();
    const [click, setClick] = useState()



    useEffect(() => {
        const db = getFirestore();
        const products = collection(db, "productos")
        getDocs(products).then(snapshots => {
            setProductos(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        })
    }, [])

    const handleChange = (e) => {
        if ([e.target.value][0] !== "") {
            let request = [e.target.value][0].toLowerCase()
            setSearch(request)
            let searching = productos.map((prod) => prod).filter((prod) =>
                prod.name.toLowerCase().includes(search))
            setResponse(searching)
        }
        else {
            setResponse()
        }
    }
    const hide = (e) => {
        setClick(false)
    }
    const spread = (e) => {
        setClick(true)
    }


    return (
        <div className="searchBar" onMouseOver={spread} onMouseLeave={hide}>
            <div className="searchInput" >
                <input
                    placeholder="Buscá un producto"
                    onChange={handleChange}
                    name="busqueda"
                />

            </div>
            {click &&
                response &&
                <div className="searchResponse">
                    {response.map((resp, index) => {
                        return <Link to={`/item/${resp.id}`} key={index}  >
                            <div className="searchResponseItem">
                                <img src={resp.imagen} alt="" />
                                <p>{resp.name}</p>
                            </div>
                        </Link>
                    })}
                </div>


            }

        </div>
    )
}