import React from "react";
import { Table } from "reactstrap";

function CustomTable({ children }) {
  const heads = [
    "ID",
    "Avatar",
    "First Name",
    "Last Name",
    "E-mail",
    "Actions",
  ];
  return (
    <div>
      <Table striped responsive>
        <thead>
          <tr>
            {heads.map((head, key) => (
              <th key={key}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children?.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>
                <img
                  src={data.avatar}
                  alt={`${data.first_name}'s avatar`}
                  className="avatar-img"
                />
              </td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomTable;
