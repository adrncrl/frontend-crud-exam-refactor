import { useState, useEffect } from "react";

function useGetUsers(getUsers, pageNumber) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [actionKey, setActionKey] = useState(0);  


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


  const triggerRefetch = () => {
    setActionKey(prevKey => prevKey + 1);  
  };

  useEffect(() => {
    handleGetUsers();
  }, [pageNumber, actionKey]);  

  return {
    users,
    loading,
    error,
    triggerRefetch,  
  };
}

export default useGetUsers;
