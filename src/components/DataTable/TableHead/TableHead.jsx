/* eslint-disable react/prop-types */
import "./TableHead.scss";

export default function TableHead({ tableColumns }) {
  let tableHeaders = tableColumns;
  return (
    <thead className="table-header">
      <tr>
        {tableHeaders &&
          tableHeaders.map((tableHeader) => {
            return (
              <th key={tableHeader} className="table-header-data">
                {tableHeader}
              </th>
            );
          })}
      </tr>
    </thead>
  );
}
