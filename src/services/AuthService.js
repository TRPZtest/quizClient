import axios from "axios";

const API_URL = "http://localhost:5207/Auth/";

class AuthService {
  login(login, password) {
    return axios
      .post(API_URL + "Login", {
        login,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        return response.token;
      });
  }

  logout() {
    localStorage.removeItem("token");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('token'));;
  }
}

export default new AuthService();