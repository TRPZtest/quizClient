import axios from "axios";

const API_URL = "http://localhost:8080/Auth/";

class AuthService {   
  login(login, password) {
    return  axios
    .post(API_URL + "Login", {
      login,
      password
    });       
  }

  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    return localStorage.getItem('token');
  }
}

export default new AuthService();