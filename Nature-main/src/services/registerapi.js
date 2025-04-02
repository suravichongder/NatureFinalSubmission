import axios from "axios";

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/user/register",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/user/login",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { registerUser, loginUser };
