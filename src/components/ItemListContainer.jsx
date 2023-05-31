import { useEffect, useState } from "react";
import arrayProductos from "./productos.json"

const Cargando = ()=>{
    return(
        <h3 className="text-center p-3">Cargando productos...</h3>
    )
}

const RenderProductos = ({productos}) =>{
    return(
        productos.map(item=>(
            <div key={item.id} className="col-md-4">
                <div className="card">
                    <img src={item.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.nombre}</h5>
                        <p className="card-text">{item.descripcion}</p>
                        <h6 className="card-title">${item.precio}</h6>
                        <a href="#" className="btn btn-primary">Comprar</a>
                    </div>
                </div>
            </div>
        ))
    )
}

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([]);
    const [disponible, setDisponible] = useState(false);

    useEffect(()=>{
        const promesa = new Promise(resolve =>{
            setTimeout(() => {
                resolve(arrayProductos);
            }, 3000);
        })

        promesa.then(respuesta=>{
            setDisponible(true);
            setProductos(respuesta);
        })
    }, []);

    return(
        <div className="row">
            {disponible ? <RenderProductos productos={productos} /> : <Cargando/>}
        </div>
    )
}
export default ItemListContainer;