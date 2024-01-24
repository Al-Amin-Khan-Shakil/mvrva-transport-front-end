import axios from "axios";

const API_URL = "http://127.0.0.1:3000/users";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
}

const authServices = {
  register,
};

export default authServices;