import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export default  function Navbar ({setToken}) {
return(
    <nav className="navbar navbar-expand-lg ">
      
        <Link to="/" className="navbar-brand">Home</Link>      
        <Link onClick={() => AuthService.logout(setToken)} className="nav-link">Logout</Link>         

    </nav>  
)
   
}