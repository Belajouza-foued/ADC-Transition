import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test';

class CandidatService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
 
  getCandidatBoard() {
    return axios.get(API_URL + 'candidat', { headers: authHeader() });
  }
  
}

export default new CandidatService();
