import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://movie-mingle-be.onrender.com/api/", // Replace with your actual Render backend URL
  withCredentials: true,
});
