import axios from "axios";

const axios_request = axios.create({
    baseURL: 'http://localhost:3000'
});
export default axios_request