import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class EmployerAuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin/employer", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("employer", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("employer");
  }

  register(username, email, password, entreprise, number, site) {
    return axios.post(API_URL + "signup/employer", {  
      
        username,    
      email,
      password,
      number,
      entreprise,
     site,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('employer'));;
  }
}

export default new EmployerAuthService();
