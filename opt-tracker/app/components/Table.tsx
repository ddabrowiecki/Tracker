import React, { FC, useState } from "react";
import { FinData, TaxInfo } from "app/types";
import { determineTaxBrackets, mapToNameString} from "../utils";

interface TableProps {
  finData: FinData;
  stockPrice: number;
}

const Table: FC<TableProps> = ({ finData, stockPrice }) => {
  const rsuValue = finData.rsusOwned * stockPrice;
  const nsoValue = finData.nsosOwned * stockPrice;
  const isoValue = finData.isosOwned * stockPrice;
  const isoSpread = isoValue - finData.isoPurchasePrice;
  const totalOwnedValue = rsuValue + nsoValue + isoSpread;
  const isosToBuyValue = finData.isoSharesToBuy * stockPrice;
  const nsosToBuyValue = finData.nsoSharesToBuy * stockPrice;
  const totalPurchasePrice =
    finData.isoSharesToBuyPurchasePrice + finData.nsoSharesToBuyPurchasePrice;
  const totalSharesValue = isosToBuyValue + nsosToBuyValue;
  const nsoSpread = (
    nsosToBuyValue - finData.nsoSharesToBuyPurchasePrice
  ).toFixed(2);
  const totalIncome = finData.estimatedSalary * 1 + parseInt(nsoSpread);
  const [capitalGains, regularIncome]: TaxInfo[] = determineTaxBrackets(
    totalOwnedValue,
    totalIncome,
    finData.filingStatus
  );

  return (
    <>
      <div>
        <p className="font-mouldyCheese font-white mt-20 ml-30">
          **This tool will not help calculate for any option type that has been
          owned for less than a year**
        </p>
        <p className="font-mouldyCheese font-white mt-20 font-30 ml-30">
          Money you have if you sell today
        </p>
      </div>
      <div className="table-contents">
        <div className="flex space-around ai-center mobile-flex-column mt-10">
          <table className="table font-mouldyCheese width-60">
            <thead>
              <tr className="font-orange-red">
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
                <td>{finData.rsusOwned}</td>
                <td>{finData.nsosOwned}</td>
                <td>{finData.isosOwned}</td>
                <td>
                  {finData.isoPurchasePrice && `$${finData.isoPurchasePrice}`}
                </td>
                <td>{`$${totalOwnedValue.toFixed(
                  2
                )}`}</td>
                <td>
                  {capitalGains.totalAfterTax &&
                    `$${capitalGains.totalAfterTax.toFixed(2)}`}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tax-bracket-container font-mouldyCheese font-orange-red">
            <div className="estimated-tax-brackets font-20">
              Estimated Tax Bracket
            </div>
            <div className="flex flex-row mt-5">
              <div>{`Filing Status: `}</div>
              <div className="font-white ml-5">
                {mapToNameString(finData.filingStatus)}
              </div>
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
        <div className="font-mouldyCheese font-white mt-20 font-30 ml-30">
          <p>Money you will pay to buy options and their value</p>
        </div>
        <div className="table-level-two flex ai-center mb-40 mt-10 ml-30">
          <table className="table ml-10 font-mouldyCheese font-orange-red">
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
                <td>{finData.isoSharesToBuy}</td>
                <td>{`$${finData.isoSharesToBuyPurchasePrice}`}</td>
                <td>{finData.nsoSharesToBuy}</td>
                <td>{`$${finData.nsoSharesToBuyPurchasePrice}`}</td>
                <td>
                  {`$${totalPurchasePrice.toFixed(2)}`}
                </td>
                <td>{`$${totalSharesValue.toFixed(
                  2
                )}`}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="font-mouldyCheese font-white mt-20 font-30 ml-30">
          <p>Estimated Tax Burden</p>
        </div>
        <div className="mb-40 ml-30 mt-10 flex space-between mobile-flex-column">
          <table className="font-mouldyCheese font-orange-red">
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
                <td>{`$${finData.estimatedSalary}`}</td>
                <td>{`$${nsoSpread}`}</td>
                <td>{`$${totalIncome}`}</td>
                <td>
                  {regularIncome.tax && `$${regularIncome.tax.toFixed(2)}`}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="tax-explainer max-w-40">
            <p className="font-mouldyCheese font-white">{`Tax Burden is calculated as a simple percentage. Your ultimate tax burden may vary based on your personal circumstances (e.g. deductions, credits)`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
