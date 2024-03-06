import axios from "axios";

const serverApi = "http://localhost:5000";

export const createOrder = async (info) => {
  await axios.post(serverApi + "/api/tickets", info);
};

export const getTickets = async () => {
return axios.get(serverApi + "/api/tickets");

};
