import { useState, useEffect } from "react";

function useGetUsers(getUsers, pageNumber) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleGetUsers = async () => {
    setLoading(true);
    try {
      const usersData = await getUsers(pageNumber);
      setUsers(usersData);
      setError(null);
    } catch (err) {
      console.log("Fetch error:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateUserListAfterEdit = async (updatedUser) => {

    await handleGetUsers(); 
  };

  const updateUserListAfterDelete = async (userId) => {
   
    await handleGetUsers(); 
  };

  useEffect(() => {
    handleGetUsers();
  }, [pageNumber]);

  return {
    users,
    loading,
    error,
    updateUserListAfterDelete,
    updateUserListAfterEdit,
  };
}

export default useGetUsers;
