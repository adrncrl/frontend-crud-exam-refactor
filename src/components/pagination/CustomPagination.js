import React from "react";
import { Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";
import usePagination from "./usePagination";
import styles from "./styles.module.scss";

const CustomPagination = ({ totalPages }) => {
  const { currentPage, itemsPerPage, handlePageChange, handleLimitChange } =
    usePagination();

  const limitOptions = [10, 20, 50];

  return (
    <div className={styles["pagination-container"]}>
      <div className={styles["limit-selector"]}>
        <span>Items per page:</span>
        <Input
          type="select"
          onChange={(e) => handleLimitChange(Number(e.target.value))}
          value={itemsPerPage}
        >
          {limitOptions.map((limit) => (
            <option key={limit} value={limit}>
              {limit}
            </option>
          ))}
        </Input>
      </div>

      <Pagination
        aria-label="Page navigation"
        className={styles["pagination-controls"]}
      >
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink first onClick={() => handlePageChange(1)} />
        </PaginationItem>
        <PaginationItem disabled={currentPage === 1}>
          <PaginationLink
            previous
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, i) => (
          <PaginationItem active={i + 1 === currentPage} key={i}>
            <PaginationLink onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink
            next
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink last onClick={() => handlePageChange(totalPages)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
