import { useSearchParams, useNavigate } from "react-router-dom";

const usePagination = (defaultPage = 1, defaultLimit = 10) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const currentPage = Number(searchParams.get("page")) || defaultPage;
  const itemsPerPage = Number(searchParams.get("per_page")) || defaultLimit;

  const updateUrlParams = (page, per_page) => {
    const newParams = { page, per_page };
    setSearchParams(...newParams);
  };

  const handlePageChange = (page) => {
    updateUrlParams(page, itemsPerPage);
  };

  const handleLimitChange = (per_page) => {
    updateUrlParams(defaultPage, per_page);
  };

  return {
    currentPage,
    itemsPerPage,
    handlePageChange,
    handleLimitChange,
  };
};

export default usePagination;
