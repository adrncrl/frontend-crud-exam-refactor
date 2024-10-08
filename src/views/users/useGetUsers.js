import { useState, useEffect } from "react";

const useGetUsers = (getUsers, pageNumber) => {
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

  const updateUserListAfterDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  useEffect(() => {
    handleGetUsers();
  }, [pageNumber]);

  return {
    users,
    loading,
    error,
    updateUserListAfterDelete,
  };
};

export default useGetUsers;
