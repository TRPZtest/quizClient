import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export default  function Navbar () {

const user = AuthService.getCurrentUser();

const handleLogout = () => {
    AuthService.logout();
    window.location.href = '/';  
}
return(
    <nav className="navbar navbar-expand-lg ">
      
        <Link to="/" className="navbar-brand">Home</Link>      
        { user ? <Link onClick={handleLogout} className="nav-link">Logout</Link> : <></>}         

    </nav>  
)
   
}