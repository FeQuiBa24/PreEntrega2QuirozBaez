import Twitter from "./images/twitter.svg"
import Facebook from "./images/facebook.svg"
import Instagram from "./images/instagram.svg"
import Ubicacion from "./images/ubicacion.png"

const Footer=()=>{
    return(
        <div className="container-fluid">
            <div className="row bg-dark text-white py-3">
                <div className="col-md-4 text-sm-start">
                    <h5>COZU</h5>
                    <p>Catamarca 1061, Córdoba Capital</p>
                    <p><b>HORARIOS</b><br></br>Lunes a Sábados<br></br>10hs a 13hs<br></br>17hs a 20hs</p>
                </div>
                <div className="col-md-4 p-3">
                    <img src={Ubicacion} className="img-fluid"/>
                </div>
                <div className="col-md-4 d-flex justify-content-around align-items-center">
                    <a href="#"><img src={Twitter} width={40}/></a>
                    <a href="#"><img src={Facebook} width={40}/></a>
                    <a href="#"><img src={Instagram} width={40}/></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;