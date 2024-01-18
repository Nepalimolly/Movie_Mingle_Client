import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api/", // Replace with your actual Render backend URL
  withCredentials: true,
});
