import { useState, useEffect } from "react";
 

const useGetUsers = (fetchFunction, pageNumber) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  const handleGetUsers = async () => {
    setLoading(true); 
    try {
      const usersData = await fetchFunction(pageNumber); 
      setUsers(usersData); 
      setError(null); 
    } catch (err) {
      console.log("Fetch error:", err);
      setError(err); 
    } finally {
      setLoading(false); 
    }
  };

  
  useEffect(() => {
    handleGetUsers(); 
  }, [pageNumber]); 

  return {
    users,
    loading,
    error,
  };
};

export default useGetUsers;
