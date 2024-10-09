import React from "react";
import CustomTable from "../../components/table/Table";
import useGetUsers from "./useGetUsers";
import { getList, deleteUser, updateUser } from "../../api/users";
import useDeleteUser from "./useDeleteUser";
import UserDeleteModal from "./UserDeleteModal";
import UserEditModal from "./UserEditModal";
import useEditUser from "./useEditUser";

function Index() {
  const {
    users,
    loading: fetchLoading,
    error: fetchError,
    updateUserListAfterDelete,
    updateUserListAfterEdit
  } = useGetUsers(getList, 1);

  const {
    handleClick: handleEditUser,
    loading: editLoading,
    error: editError,
  } = useEditUser(updateUser, updateUserListAfterEdit);
  
  const {
    handleClick: handleDeleteUser,
    loading: deleteLoading,
    error: deleteError,
  } = useDeleteUser(deleteUser, updateUserListAfterDelete);

  const isLoading = fetchLoading || editLoading || deleteLoading;
  const isError = fetchError || editError || deleteError;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError.message}</p>}
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
