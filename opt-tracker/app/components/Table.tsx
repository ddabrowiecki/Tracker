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
  const nsoValue = finData.nsosOwned * stockPrice;
  const isoValue = finData.isosOwned * stockPrice;
  const isoSpread = isoValue - finData.isoPurchasePrice;
  const totalOwnedValue = rsuValue + nsoValue + isoSpread;
  const isosToBuyValue = finData.isoSharesToBuy * stockPrice;
  const nsosToBuyValue = finData.nsoSharesToBuy * stockPrice;
  const totalPurchasePrice =
    finData.isoPurchasePrice + finData.nsoPurchasePrice;
  const totalSharesValue = isosToBuyValue + nsosToBuyValue;
  const nsoSpread = (nsosToBuyValue - finData.nsoPurchasePrice).toFixed(2);
  const totalIncome = finData.estimatedSalary * 1 + parseInt(nsoSpread);
  const [capitalGains, regularIncome] = determineTaxBrackets(
    totalOwnedValue,
    totalIncome
  );

  return (
    <>
      <div>
        <p className="font-mouldyCheese font-white">
          **This tool will not help calculate for any option type that has been
          owned for less than a year**
        </p>
        <p className="font-mouldyCheese font-white">
          $$$ you have if you sell today
        </p>
      </div>
      <div className="flex space-around">
        <table className="table font-mouldyCheese">
          <thead>
            <tr>
              <th>RSUs Owned</th>
              <th>NSOs Owned</th>
              <th>ISOs Owned</th>
              <th>ISO Purchase Price</th>
              <th>ISO Spread plus RSU and NSO value</th>
              <th>After Cap Gains Tax Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-white">{finData.rsusOwned}</td>
              <td className="font-white">{finData.nsosOwned}</td>
              <td className="font-white">{finData.isosOwned}</td>
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
      <div className="font-mouldyCheese font-white">
        <p>$$$ you will pay to buy and its value</p>
      </div>
      <div className="table-level-two flex ai-center mb-40 mt-10">
        <table className="table ml-10 font-mouldyCheese">
          <thead>
            <tr>
              <th>ISOs to Buy</th>
              <th>ISOs Price to Buy</th>
              <th>NSOs to Buy</th>
              <th>NSOs Price to Buy</th>
              <th>Total Price to Buy</th>
              <th>Bought Shares Current Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-white">{finData.isoSharesToBuy}</td>
              <td className="font-white">{`$${finData.isoPurchasePrice}`}</td>
              <td className="font-white">{finData.nsoSharesToBuy}</td>
              <td className="font-white">{`$${finData.nsoPurchasePrice}`}</td>
              <td className="font-white">
                {`$${totalPurchasePrice.toFixed(2)}`}
              </td>
              <td className="font-white">{`$${totalSharesValue.toFixed(
                2
              )}`}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="font-mouldyCheese">
          <thead>
            <tr>
              <th>Estimated 2024 Salary</th>
              <th>NSO Spread</th>
              <th>Total 2024 Income</th>
              <th>Approx. Tax Burden</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-white">{`$${finData.estimatedSalary}`}</td>
              <td className="font-white">{`$${nsoSpread}`}</td>
              <td className="font-white">{`$${totalIncome}`}</td>
              <td className="font-white">
                {regularIncome.tax && `$${regularIncome.tax.toFixed(2)}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
