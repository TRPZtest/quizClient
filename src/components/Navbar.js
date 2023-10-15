import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export default  function Navbar ({setToken}) {
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Home</Link>      
        <Link onClick={() => AuthService.logout(setToken)} className="navbar-brand">Logout</Link>         
      </div>
</nav>
}