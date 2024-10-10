import { useState } from "react";

function useDeleteUser(deleteUser, triggerRefetch) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (userID) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await deleteUser(userID);
      setSuccess(true);
      triggerRefetch(); 
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
}

export default useDeleteUser;
