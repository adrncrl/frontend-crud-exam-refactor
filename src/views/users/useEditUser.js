import { useState } from "react";

const useEditUser = (editUser, updateUserListAfterEdit) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (userID, formData) => {
    console.log(userID)
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      const updatedUser = await editUser(userID, formData); 
      console.log(updatedUser)
      updateUserListAfterEdit(updatedUser);
      setSuccess(true);
    } catch (error) {
      console.log("Fetch error:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleClick,
    loading,
    error,
    success,
  };
};

export default useEditUser;
