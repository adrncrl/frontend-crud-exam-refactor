import React from 'react'
import CustomTable from '../../components/table/Table'
import useGetUsers from './useGetUser'
import { getList } from '../../api/users';

function Index() {

  const { users, loading, error } = useGetUsers(getList, 1);
 
  return (
    // wrapper here
    <div> 
      {loading && <p>Loading...</p>}
      {error && <p> Error: {error}</p>}
      {users.length > 0 ? (
          <CustomTable children={users}/>
      ):(
        <p>No data</p>
      )}
      
    </div>
  )
}

export default Index
