import axios from 'axios';
import employerAuthHeader from './employer.auth-header';

const API_URL = 'http://localhost:8080/api/test';

class EmployerService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: employerAuthHeader() });
  }

  getEmployerBoard() {
    return axios.get(API_URL + 'employer', { headers: employerAuthHeader() });
  }  
  
}

export default new EmployerService();
