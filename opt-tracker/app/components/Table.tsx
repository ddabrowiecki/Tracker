import React, { FC } from "react";
import { FinData } from "../page";

interface TableProps {
  finData: FinData;
  stockPrice: number;
}

const Table: FC<TableProps> = ({ finData, stockPrice }) => {
  const totalShares = (finData.sharesOwned*1 + finData.rsusOwned*1)
  const totalOwnedValue = totalShares * stockPrice
  const afterCapGains = totalOwnedValue - totalOwnedValue * 0.15
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Shares Owned</th>
            <th>Total Owned Value</th>
            <th>After Cap Gains Tax Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{totalShares}</td>
            <td>{`$${totalOwnedValue.toFixed(2)}`}</td>
            <td>{`$${afterCapGains.toFixed(2)}`}</td>
          </tr>
        </tbody>
      </table>

      <table className="table">
        <thead>
          <tr>
            <th>Shares to Buy</th>
            <th>Total To Buy Value (Spread)</th>
            <th>Estimated 2024 Salary</th>
            <th>Total 2024 Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
