import React, { FC } from "react";
import { FinData } from "../page";

interface TableProps {
  finData: FinData;
}

const Table: FC<TableProps> = ({ finData }) => {
  return (
    <>
      <table className="table">
        <tr>
          <th>Shares Owned</th>
          <th>Total Owned Value</th>
          <th>After Cap Gains Tax Value</th>
        </tr>
        <tr>
          <td>{finData.sharesOwned}</td>
          <td>mer</td>
        </tr>
      </table>

      <table className="table">
        <tr>
          <th>
            <td>Shares to Buy</td>
            <td>Total To Buy Value (Spread)</td>
            <td>Estimated 2024 Salary</td>
            <td>Total 2024 Income</td>
          </th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </>
  );
};

export default Table;
