import React, { FC, useState } from "react";
import { FinData } from "../page";

interface TableProps {
  finData: FinData;
  stockPrice: number;
}

type TaxBracketInfo = [number, number, number, string, string];

interface TaxBracketObject {
  [bracketString: string]: TaxBracketInfo;
}

interface TaxBracketMaster {
  capitalGains: TaxBracketObject;
  regularIncome: TaxBracketObject;
}
const taxBrackets: TaxBracketMaster = {
  capitalGains: {
    zero: [0, 47025, 0, "0%", "$0 - $47,025"],
    fifteen: [47026, 518900, 0.15, "15%", "$47,026 - $518,900"],
    twenty: [518901, 1000000000, 0.2, "20%", "$518,901 +"],
  },
  regularIncome: {
    ten: [0, 11600, 0.1, "10%", "$0 - $11,600"],
    twelve: [11601, 47150, 0.12, "12%", "$11,601 - $47,150"],
    twentytwo: [47151, 100525, 0.22, "22%", "$47,151 - $100,525"],
    twentyfour: [100526, 191950, 0.24, "24%", "$100,526 - $191,950"],
    thirtytwo: [191951, 243725, 0.32, "32%", "$191,951 - $243,725"],
    thirtyfive: [243726, 609350, 0.35, "35%", "$243,726 - $609,350"],
    thirtyseven: [609351, 1000000000, 0.37, "37%", "$609,351 +"],
  },
};

interface TaxInfo {
  rate: string;
  range: string;
  tax: number;
  totalAfterTax: number;
}

const determineTaxBrackets = (totalOwnedValue: number, totalIncome: number) => {
  const capGains: TaxInfo = {} as TaxInfo;
  const regIncome: TaxInfo = {} as TaxInfo;
  Object.values(taxBrackets.capitalGains).forEach((bracket) => {
    if (totalIncome >= bracket[0] && totalIncome <= bracket[1]) {
      capGains.tax = totalOwnedValue * bracket[2];
      capGains.rate = bracket[3];
      capGains.range = bracket[4];
      capGains.totalAfterTax = totalOwnedValue - totalOwnedValue * bracket[2];
    }
  });
  Object.values(taxBrackets.regularIncome).forEach((bracket) => {
    if (totalIncome >= bracket[0] && totalIncome <= bracket[1]) {
      regIncome.tax = totalIncome * bracket[2];
      regIncome.rate = bracket[3];
      regIncome.range = bracket[4];
    }
  });
  return [capGains, regIncome];
};

const Table: FC<TableProps> = ({ finData, stockPrice }) => {
  const rsuValue = finData.rsusOwned * stockPrice;
  const isoValue = finData.sharesOwned * stockPrice;
  const isoSpread = isoValue - finData.isoPurchasePrice;
  const totalOwnedValue = rsuValue + isoSpread;
  const sharesToBuyValue = finData.sharesToBuy * stockPrice;
  const spread = (sharesToBuyValue - finData.priceToBuy).toFixed(2);
  const totalIncome = finData.estimatedSalary * 1 + parseInt(spread);
  const [capitalGains, regularIncome] = determineTaxBrackets(
    totalOwnedValue,
    totalIncome
  );

  return (
    <>
      <div className="flex space-around">
        <table className="table font-mouldyCheese">
          <thead>
            <tr>
              <th>RSUs Owned</th>
              <th>ISOs Owned</th>
              <th>ISO Purchase Price</th>
              <th>ISO Spread plus RSU value</th>
              <th>After Cap Gains Tax Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-white">{finData.rsusOwned}</td>
              <td className="font-white">{finData.sharesOwned}</td>
              <td className="font-white">
                {finData.isoPurchasePrice && `$${finData.isoPurchasePrice}`}
              </td>
              <td className="font-white">{`$${totalOwnedValue.toFixed(2)}`}</td>
              <td className="font-white">
                {capitalGains.totalAfterTax &&
                  `$${capitalGains.totalAfterTax.toFixed(2)}`}
              </td>
            </tr>
          </tbody>
        </table>

        <table className="table ml-10 font-mouldyCheese">
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
              <td className="font-white">{finData.sharesToBuy}</td>
              <td className="font-white">{`$${finData.priceToBuy}`}</td>
              <td className="font-white">{sharesToBuyValue && `$${sharesToBuyValue.toFixed(2)}`}</td>
              <td className="font-white">{`$${spread}`}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="table-level-two flex space-around ai-center mb-40 mt-10">
        <table className="font-mouldyCheese">
          <thead>
            <tr>
              <th>Estimated 2024 Salary</th>
              <th>Total 2024 Income</th>
              <th>Approx. Tax Burden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-white">{`$${finData.estimatedSalary}`}</td>
              <td className="font-white">{`$${totalIncome}`}</td>
              <td className="font-white">{regularIncome.tax && `$${regularIncome.tax.toFixed(2)}`}</td>
            </tr>
          </tbody>
        </table>
        <div className="tax-bracket-container font-mouldyCheese">
          <div className="font-20">Estimated Tax Bracket</div>
          <div className="flex flex-row mt-5">
            <div>{`Filing Status: `}</div>
            <div className="font-white ml-5">{`Single`}</div>
          </div>
          <div className="flex flex-row mt-5">
            <div>{`${regularIncome.rate} Regular Income Tax Bracket: `}</div>
            <div className="font-white ml-5">{` ${regularIncome.range}`}</div>
          </div>
          <div className="flex flex-row">
            <div>{`${capitalGains.rate} Long Term Cap Gains Bracket: `}</div>
            <div className="font-white ml-5">{` ${capitalGains.range}`}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
