import { useState } from "react";

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
}

export default useCreateUser;
