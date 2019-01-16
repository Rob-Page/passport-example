import axios from 'axios';

export default {
    createUser: (userData) => axios.post('/api/user/create', userData),
    loginUser: (userData) => axios.post('/api/user/login', userData),
}