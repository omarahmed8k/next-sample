/* eslint-disable react/prop-types */
import Pagination from "react-js-pagination";
import TableHead from "./TableHead/TableHead";
import TableRow from "./TableRow/TableRow";
import "./DataTable.scss";

export default function DataTable({
  tableRows = [],
  tableColumns = [],
  mapKey,
  showPagination = false,
  activePage = 1,
  itemsCount = 1,
  handlePageChange = () => { },
}) {
  return (
    <div className="data-table-container">
      <div className="table-responsive">
        <table className="card-table records-table" cellSpacing="0">
          {/* table head gets the table columns titles */}
          <TableHead tableColumns={tableColumns} />
          <tbody>
            {tableRows &&
              tableRows.map((tableRow) => {
                return (
                  // table row gets the table row data from backend
                  <TableRow
                    key={tableRow[mapKey]}
                    tableRow={tableRow}
                    tableColumns={tableColumns}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
      {showPagination && (
        // pagination component gets the active page number and the total number of items
        <div className="table-pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={8}
            totalItemsCount={itemsCount} //length
            pageRangeDisplayed={
              Math.ceil(itemsCount / 8) > 8 ? 8 : Math.ceil(itemsCount / 8)
            } // total tickets length / number of items per page to the nearist intiger
            onChange={(pageNumber) => handlePageChange(pageNumber)}
          />
        </div>
      )}
    </div>
  );
}
