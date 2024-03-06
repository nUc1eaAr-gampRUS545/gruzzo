import axios from "axios";
import store from "@/store/store";

const serverApi = "http://localhost:5000";

export const registration = async (info) => {
  const { data } = await axios.post(serverApi + "/api/user/registration", info);
  localStorage.setItem("token", data.token);
};

export const login = async (info) => {
  const { data } = await axios.post(serverApi + "/api/user/login", info);
  store.commit("updateUser", data.data); 
  localStorage.setItem("token", data.token);
};
export const check = async () => {
  const { data } = await axios.get(serverApi + "/api/user/auth");
  localStorage.setItem("token", data.token);
};
