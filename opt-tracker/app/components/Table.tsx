import React, { FC, useState } from "react";
import { FinData } from "../page";

interface TableProps {
  finData: FinData;
  stockPrice: number;
}

const Table: FC<TableProps> = ({ finData, stockPrice }) => {
  const totalShares = finData.sharesOwned * 1 + finData.rsusOwned * 1;
  const totalOwnedValue = totalShares * stockPrice;
  const afterCapGains = totalOwnedValue - totalOwnedValue * 0.15;
  const sharesToBuyValue = finData.sharesToBuy * stockPrice;
  const spread = (sharesToBuyValue - finData.priceToBuy).toFixed(2);
  const totalIncome = finData.estimatedSalary * 1 + parseInt(spread);
  const taxBurden = totalIncome * 0.35;

  return (
    <>
      <div className="flex space-around">
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

        <table className="table ml-10">
          <thead>
            <tr>
              <th>Shares to Buy</th>
              <th>Price to Buy</th>
              <th>Shares to Buy Current Value</th>
              <th>Spread</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{finData.sharesToBuy}</td>
              <td>{`$${finData.priceToBuy}`}</td>
              <td>{`$${sharesToBuyValue}`}</td>
              <td>{`$${spread}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <table>
        <thead>
          <tr>
            <th>Estimated 2024 Salary</th>
            <th>Total 2024 Income</th>
            <th>Approx. Tax Burden</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{`$${finData.estimatedSalary}`}</td>
            <td>{`$${totalIncome}`}</td>
            <td>{`$${taxBurden}`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
