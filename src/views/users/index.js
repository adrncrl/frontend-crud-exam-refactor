import React from "react";
import CustomTable from "../../components/table/Table";
import useGetUsers from "./useGetUsers";
import { getList, updateUser, deleteUser, createUser } from "../../api/users";
import useEditUser from "./useEditUser";
import useDeleteUser from "./useDeleteUser";
import UserDeleteModal from "./UserDeleteModal";
import UserEditModal from "./UserEditModal";
import CustomPagination from "../../components/pagination/CustomPagination";
import usePagination from "../../components/pagination/usePagination";
import UserCreateModal from "./UserCreateModal";
import useCreateUser from "./useCreateUser";
import styles from './styles.module.scss'

function Index() {
  const { currentPage, itemsPerPage } = usePagination();
  const { users, loading: fetchLoading, error, totalPages, refetch } = useGetUsers(getList,currentPage,itemsPerPage);

  const { handleClick: handleCreateUser, loading: createLoading } =useCreateUser(createUser, refetch);
  const { handleClick: handleDeleteUser, loading: deleteLoading } = useDeleteUser(deleteUser, refetch);
  const { handleClick: handleEditUser, loading: editLoading } = useEditUser( updateUser, refetch);

  const isLoading =  fetchLoading || createLoading || editLoading || deleteLoading ;

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div className={styles['create-modal-wrapper']}>
        <UserCreateModal handleCreate={handleCreateUser}/>
      </div>
      
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
      <CustomPagination totalPages={totalPages} />
    </div>
  );
}

export default Index;
