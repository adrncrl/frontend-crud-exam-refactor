import { useState } from "react";
import { toast } from "react-toastify";

function useCreateUser(create, triggerRefetch) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async (formData) => {
    setSuccess(false);
    setError(null);
    setLoading(true);

    try {
      await create(formData);
      triggerRefetch();
      setSuccess(true);
      toast.success("User created successfully!"); 
    } catch (error) {
      console.log("Edit error:", error);
      setError(error);
      toast.error("Failed to create user: " + (error.message || "An error occurred.")); 
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

export default useCreateUser;
