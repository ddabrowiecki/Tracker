import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { determineTaxBrackets } from "../utils"
import { after } from "node:test";

// Assuming the following data:
// Stock Price: $50
// EDGE CASE:
// {
//     rsusOwned: 420;
//     nsosOwned: 420;
//     isosOwned: 420;
//     isoPurchasePrice: 1000;
//     estimatedSalary: 100000;
//     isoSharesToBuy: 0;
//     nsoSharesToBuy: 2400;
//     isoSharesToBuyPurchasePrice: 0;
//     nsoSharesToBuyPurchasePrice: 20000;
//   }

const ownedStockValue = 63000
const totalIncome = 200000

const taxCalculatedByHand = {
    capitalGains: {
        single: ownedStockValue * .15,
        marriedFilingJointly: ownedStockValue * 0,
        marriedFilingSeparately: ownedStockValue * .15,
        headOfHousehold: ownedStockValue * 0,
      },
      regularIncome: {
        single: totalIncome * .32,
        marriedFilingJointly: totalIncome * .22,
        marriedFilingSeparately: totalIncome * .32,
        headOfHousehold: totalIncome * .32,
      },
}

describe("determineTaxBrackets", () => {
  it("calculates tax burdens properly with single filing status", () => {
    const [capGains, regularIncome ] = determineTaxBrackets(ownedStockValue, totalIncome, "single")
    expect(capGains.tax).toEqual(taxCalculatedByHand.capitalGains.single)
    expect(regularIncome.tax).toEqual(taxCalculatedByHand.regularIncome.single)
  });
  it("calculates tax burdens properly with married filing jointly status", () => {
    const [capGains, regularIncome ] = determineTaxBrackets(ownedStockValue, totalIncome, "marriedFilingJointly")
    expect(capGains.tax).toEqual(taxCalculatedByHand.capitalGains.marriedFilingJointly)
    expect(regularIncome.tax).toEqual(taxCalculatedByHand.regularIncome.marriedFilingJointly)
  });
  it("calculates tax burdens properly with married filing separately filing status", () => {
    const [capGains, regularIncome ] = determineTaxBrackets(ownedStockValue, totalIncome, "marriedFilingSeparately")
    expect(capGains.tax).toEqual(taxCalculatedByHand.capitalGains.marriedFilingSeparately)
    expect(regularIncome.tax).toEqual(taxCalculatedByHand.regularIncome.marriedFilingSeparately)
  });
  it("calculates tax burdens properly with head of household filing status", () => {
    const [capGains, regularIncome ] = determineTaxBrackets(ownedStockValue, totalIncome, "headOfHousehold")
    expect(capGains.tax).toEqual(taxCalculatedByHand.capitalGains.headOfHousehold)
    expect(regularIncome.tax).toEqual(taxCalculatedByHand.regularIncome.headOfHousehold)
  });
});
