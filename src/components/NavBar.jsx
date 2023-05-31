const NavBar=()=>{
    return(
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex justify-content-end">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                    <a className="nav-link active text-decoration-none text-white" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-decoration-none text-white" aria-current="page" href="#">Destacados</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-decoration-none text-white" aria-current="page" href="#">Outfits</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link active text-decoration-none text-white dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorías
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Camisas</a></li>
                        <li><a className="dropdown-item" href="#">Pantalones</a></li>
                        <li><a className="dropdown-item" href="#">Remeras</a></li>
                        <li><a className="dropdown-item" href="#">Calzado</a></li>
                        <li><a className="dropdown-item" href="#">Accesorios</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;