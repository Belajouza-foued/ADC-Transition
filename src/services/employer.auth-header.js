export default function authHeader() {
    const employer = JSON.parse(localStorage.getItem('employer'));
  
    if (employer && employer.accessToken) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': employer.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }
  