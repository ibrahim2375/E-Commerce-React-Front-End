import axios from "axios";

const axios_request = axios.create({
    baseURL: import.meta.env.VITE_API
});
export default axios_request