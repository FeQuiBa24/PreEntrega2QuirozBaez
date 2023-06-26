import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({producto})=>{
    return(
        <>
        <div className="col-md-4 my-3">
            <div className="card">
                <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                    <img src={producto.imagen} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.titulo} {producto.color}</h5>
                        <p className="card-text">{producto.descripcion}</p>
                        <h6 className="card-title">${producto.precio}</h6>
                        <ItemCount stock={10}/>
                    </div>
                </Link>                
            </div>
        </div>
        </>
        
    )
}
export default Item;