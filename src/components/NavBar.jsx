import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-end">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <NavLink className="nav-link active text-decoration-none text-white" aria-current="page" to={"/"}>INICIO</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link active text-decoration-none text-white dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        PROMOCIONES
                    </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                    <NavLink className="nav-link active text-decoration-none text-white dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        CATEGORIAS
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><NavLink className="dropdown-item" to={"/category/camisas"}>CAMISAS</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/pantalones"}>PANTALONES</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/remeras"}>REMERAS</NavLink></li>
                        <li><NavLink className="dropdown-item" to={"/category/abrigos"}>SWEATERS Y BUZOS</NavLink></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;