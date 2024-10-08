import instance from "../utils/axios/instance";

const getList = async (pageNumber) => {
  try {
    const response = await instance.get(`?page=${pageNumber}`);
    console.log("test",response)
    return response.data.data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
};

const getUserById = async (userId) => {
  try {
    const response = await instance.get(`/${userId}`);
    return response.data;
  } catch (error) {
    console.log("Fetch error:", error);
  }
};
const createUser = async (userData) => {
  try {
    const response = await instance.post("/", userData);
    return response.data;
  } catch (error) {
    console.log("Create error:", error);
  }
};

const updateUser = async (userId, userData) => {
  try {
    const response = await instance.put(`/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.log("Update error:", error);
  }
};

const deleteUser = async (userId) =>{
  console.log(userId)
  try{
    const response =  await instance.delete(`/${userId}`)
    console.log(response)
    return response.data
  }catch(error){
    console.log("Delete error:", error);
  }
}

export {
  getList,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}
