import React from "react";
import CustomTable from "../../components/table/Table";
import useGetUsers from "./useGetUsers";
import { getList, updateUser, deleteUser } from "../../api/users";
import useEditUser from "./useEditUser";
import useDeleteUser from "./useDeleteUser";
import UserDeleteModal from "./UserDeleteModal";
import UserEditModal from './UserEditModal'

function Index() {
  const {
    users,
    loading: fetchLoading,
    error,
    triggerRefetch,
  } = useGetUsers(getList, 1);
  const {
    handleClick: handleDeleteUser,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteUser(deleteUser, triggerRefetch);
  const {
    handleClick: handleEditUser,
    loading: editLoading,
    error: editError,
  } = useEditUser(updateUser, triggerRefetch);

  const isLoading = fetchLoading || deleteLoading;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {users.length > 0 ? (
        <CustomTable
          children={users}
          handleEdit={handleEditUser}
          EditModal={UserEditModal}
          handleDelete={handleDeleteUser}
          DeleteModal={UserDeleteModal}
        />
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default Index;
