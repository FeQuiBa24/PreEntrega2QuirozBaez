import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import carrito from "./images/carrito.png";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    return (
        <Link className="btn btn-dark position-relative" to={"/cart"}>
            <img src={carrito} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;