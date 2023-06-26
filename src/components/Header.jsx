import CartWidget from "./CartWidget";
import NavBar from "./NavBar";
import logo from "./images/logo.jpg"
import { Link } from "react-router-dom";

const Header=()=>{
    return(
    <div className="container-fluid">
        <div className="row bg-dark p-3">
            <div className="col-md-6">
            </div>
            <div className="col-md-6 text-sm-end text-white">
                <Link to={"#"} className="text-decoration-none text-white">Sobre nosotros</Link> | <Link to={"#"} className="text-decoration-none text-white">Ayuda</Link>
            </div>
        </div>
        <div className="row bg-dark p-3 text-white">
            <div className="col-md-2">
                <img src={logo} width={64} alt=""/>
            </div>
            <div className="col-md-8 text-end">
                <NavBar />
            </div>
            <div className="col-md-2 text-end">
                <CartWidget />
            </div>
        </div>
    </div>    
    )
}
export default Header;