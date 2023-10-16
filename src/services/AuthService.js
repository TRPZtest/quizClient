import axios from "axios";

const API_URL = "http://localhost:5207/Auth/";

class AuthService {   
  login(login, password) {
    return  axios
    .post(API_URL + "Login", {
      login,
      password
    });       
  }

  logout(setToken) {
    localStorage.removeItem("token");
    setToken(undefined);
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}

export default new AuthService();