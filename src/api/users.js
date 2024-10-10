import instance from "../utils/axios/instance";
import qs from "qs";

const getList = async (params) => {
  const queryString = qs.stringify(params, { addQueryPrefix: true });

  try {
    const response = await instance.get(`/users${queryString}`); 
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const response = await instance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const response = await instance.post("/users", userData);
    return response.data;
  } catch (error) {
    console.log("Create error:", error);
    throw error;
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await instance.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.log("Update error:", error);
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const response = await instance.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Delete error:", error);
    throw error;
  }
};

export { getList, getUserById, createUser, updateUser, deleteUser };
