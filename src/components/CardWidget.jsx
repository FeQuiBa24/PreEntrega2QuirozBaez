import Carrito from "./images/carrito.png"

const CardWidget=()=>{
    return(
        <button type="button" className="btn btn-dark position-relative">
            <img src={Carrito} width={30}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
        </button>
    )
}
export default CardWidget;