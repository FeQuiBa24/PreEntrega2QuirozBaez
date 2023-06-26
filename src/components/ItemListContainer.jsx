import { useEffect, useState } from "react";
//import productos from "./productos.json"
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

/* const Cargando = ()=>{
    return(
        <h3 className="text-center p-3">Cargando productos...</h3>
    )
} */

const ItemListContainer = ()=>{
    const [items, setItems] = useState([]);
    //const [disponible, setDisponible] = useState(false);
    const {id} = useParams();

    //.json
    /* useEffect(()=>{
        const promesa = new Promise(resolve =>{
            setTimeout(() => {
                resolve(id ? productos.filter(e => e.categoria === id) : productos);
            }, 500);
        })

        promesa.then(respuesta=>{
            setDisponible(true);
            setItems(respuesta);
        })
    }, [id]); */

    //firebase
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, [id]);

    return(
        <div className="container my-5">
            <div className="row">
                <ItemList productos={items} />
            </div>
        </div>
    )
}
export default ItemListContainer;