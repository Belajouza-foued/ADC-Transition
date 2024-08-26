export default function authHeader() {
    const candidat = JSON.parse(localStorage.getItem('candidat'));
  
    if (candidat && candidat.accessToken) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': candidat.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
  