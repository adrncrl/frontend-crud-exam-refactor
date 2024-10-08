import { useState } from "react";

const useDeleteUser = (deleteUser, updateUserListAfterDelete) => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (userID) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await deleteUser(userID);
      updateUserListAfterDelete(userID);
      setSuccess(true);
    } catch (error) {
      console.log("Delete error:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleClick,
    success,
    error,
    loading,
  };
};

export default useDeleteUser;
