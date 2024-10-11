import { useState } from "react";
import { toast } from "react-toastify";

function useEditUser(editUser, triggerRefetch) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (userID, formData) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await editUser(userID, formData);
      triggerRefetch();
      setSuccess(true);
      toast.success("User updated successfully!"); 
    } catch (error) {
      console.log("Edit error:", error);
      setError(error);
      toast.error("Failed to update user: " + (error.message || "An error occurred.")); 
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
}

export default useEditUser;
