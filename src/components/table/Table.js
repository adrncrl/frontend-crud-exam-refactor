import React from "react";
import { Table } from "reactstrap";
import styles from "./styles.module.scss";
function CustomTable({
  children,
  handleEdit,
  EditModal,
  handleDelete,
  DeleteModal,
}) {
  const heads = [
    "ID",
    "Avatar",
    "First Name",
    "Last Name",
    "E-mail",
    "Actions",
  ];

  return (
    <div className={styles["table-container"]}>
      <Table striped responsive className={styles["custom-table"]}>
        <thead className={styles["table-head"]}>
          <tr>
            {heads.map((head, key) => (
              <th key={key} className={styles["table-head-cell"]}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles["table-body"]}>
          {children?.map((data) => (
            <tr key={data.id} className={styles["table-row"]}>
              <td>{data.id}</td>
              <td>
                <img
                  src={data.avatar}
                  alt={`${data.first_name}'s avatar`}
                  className={styles["avatar-img"]}
                />
              </td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>
                <div className={styles["action-buttons"]}>
                  <DeleteModal userID={data.id} handleDelete={handleDelete} />
                  <EditModal userID={data} handleEdit={handleEdit} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
