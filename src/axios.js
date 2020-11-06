import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/app-ed93a/us-central1/api",
});

export default instance;
