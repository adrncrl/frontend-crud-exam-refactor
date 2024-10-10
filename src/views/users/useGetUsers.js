import { useState, useEffect } from 'react';

const useGetUsers = (getList, currentPage, itemsPerPage) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getList({ page: currentPage, per_page: itemsPerPage });
      const { data, total_pages } = response;
      setUsers(data);
      setTotalPages(total_pages);
    } catch (err) {
      setError(err);
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch users on mount and when pagination changes
  useEffect(() => {
    fetchUsers();
  }, [currentPage, itemsPerPage]);

  return { users, loading, error, totalPages, refetch: fetchUsers };
};

export default useGetUsers;
