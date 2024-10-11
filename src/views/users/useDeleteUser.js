import { useState } from "react";
import { toast } from "react-toastify";

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
      toast.success("User deleted successfully!"); 
      console.log("Delete error:", error);
    }catch(error){
      setError(error);
      toast.error("Failed to delete user: " + (error.message || "An error occurred.")); 
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
