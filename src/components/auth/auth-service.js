import axios from "axios"

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://dry-ocean-98079.herokuapp.com',
      withCredentials: true
    });
    this.service = service;
  }
  signup = (name, password, email) => {
    return this.service.post('/dogs/signup', {name, password, email})
    .then(response => response.data)
  }
  login = (password, email) => {
    return this.service.post('/dogs/login', {password, email})
    .then(response => response.data)
  }
 
 }
 
 export default AuthService;