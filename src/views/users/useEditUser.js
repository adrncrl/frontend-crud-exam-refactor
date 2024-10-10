import { useState } from "react";

function useEditUser(editUser, triggerRefetch){
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
    } catch (error) {
      console.log("Edit error:", error);
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
