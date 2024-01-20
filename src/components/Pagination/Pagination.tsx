import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { FC } from "react";

interface IPaginationProps {
  currentPage: number;
  onChangePage: (value: number) => void;
}

const Pagination: FC<IPaginationProps> = ({ currentPage, onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
