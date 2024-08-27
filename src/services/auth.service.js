import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin/candidat", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("candidat", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("candidat");
  }

  register(username, email, entreprise, number, site, langue, goverment, niveau, birthday,password,) {
    return axios.post(API_URL + "signup/candidat", {  
      
    username,    
      email,
      entreprise,
      number,
      site,
      langue,  
      niveau,         
      goverment,
      birthday,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('candidat'));;
  }
}

export default new AuthService();
