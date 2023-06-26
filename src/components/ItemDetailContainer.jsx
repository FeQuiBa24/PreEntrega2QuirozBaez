import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "./productos.json";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Cargando from "./context/Cargando";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [cargando, setCargando] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()});
            setCargando(false);
        });
    }, [id])

    return (
        <>
            {cargando ? <Cargando /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailContainer;