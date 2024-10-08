import React from "react";
import CustomTable from "../../components/table/Table";
import useGetUsers from "./useGetUsers";
import { getList, deleteUser } from "../../api/users";
import useDeleteUser from "./useDeleteUser";

function Index() {
  const { users, loading: fetchLoading, error, updateUserListAfterDelete } = useGetUsers(
    getList,
    1
  );
  const { handleClick: handleDeleteUser, loading: deleteLoading } = useDeleteUser(
    deleteUser,
    updateUserListAfterDelete
  ); 

  const isLoading = fetchLoading || deleteLoading;
  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {users.length > 0 ? (
        <CustomTable
          children={users}
          handleDelete={handleDeleteUser} 
        />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default Index;
