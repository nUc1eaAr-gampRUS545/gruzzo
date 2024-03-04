import axios from "axios";
//import {$authHost, $host} from "./index.js";
//import jwt_decode from "jwt-decode";
const serverApi = "http://localhost:5000"
export const registration = async (info) => {
  const { data } = await axios.post(
    serverApi+"/api/user/registration",
    info
  );
  localStorage.setItem("token", data.token);
};

export const login = async (info) => {
  const { data } = await axios.post(
    serverApi+"/api/user/login",
    info
  );
  localStorage.setItem("token", data.token);

};

export const check = async () => {
  const { data } = await axios.get(serverApi+"/api/user/auth");
  localStorage.setItem("token", data.token);
};
