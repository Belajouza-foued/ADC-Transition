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

  register(firstname, email,number, birthday, adresse,education, file,city, levelEnglish,levelFrensh,levelGermany,drivingLicence,lastname,gender,experience,speciality,password,) {
    return axios.post(API_URL + "signup/candidat", {  
      
      firstname,    
      email,
      number,
      birthday,     
      adresse,
      education,  
      file,         
      city,
      levelEnglish,
      levelFrensh,
      levelGermany,
      drivingLicence,
      lastname,
      gender,
      experience,
      speciality,    
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('candidat'));;
  }
}

export default new AuthService();
