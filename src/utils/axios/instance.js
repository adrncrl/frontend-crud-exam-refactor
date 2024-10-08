import axios from "axios";


const apiUrl = process.env.REACT_APP_API_BASE_URL;

console.log(apiUrl);
const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance