import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5002/api" : "https://chat-app-backend-9bci.onrender.com/api",
  withCredentials: true,
});
