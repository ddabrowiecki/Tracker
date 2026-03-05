import { validateInput } from "app/utils";
import React from "react";

const ISOForm = ({
  isosOwned,
  setIsosOwned,
  isoPurchasePrice,
  setIsoPurchasePrice,
  isoSharesToBuy,
  setIsoSharesToBuy,
  isoSharesToBuyPurchasePrice,
  setIsoSharesToBuyPurchasePrice,
}) => {
  return (
    <div className="mobile-margin-top-spacing form-border-box">
      <div className="border-box-title">Incentive Stock Units (ISOs)</div>
      <div className="flex flex-col">
          <input
            type="text"
            value={isosOwned}
            onChange={(e) => validateInput(setIsosOwned, e.target.value)}
            placeholder="Owned"
            aria-label="Amount of ISOs Owned"
          />
          <input
            type="text"
            value={isoPurchasePrice}
            onChange={(e) => validateInput(setIsoPurchasePrice, e.target.value)}
            placeholder="Money Paid for Exercise"
            aria-label="Money Paid for ISO Exercise"
          />
          <input
            type="text"
            value={isoSharesToBuy}
            onChange={(e) => validateInput(setIsoSharesToBuy, e.target.value)}
            placeholder="Unexercised Amount"
            aria-label="ISO Unexercised Amount"
          />
          <input
            type="text"
            value={isoSharesToBuyPurchasePrice}
            onChange={(e) =>
              validateInput(setIsoSharesToBuyPurchasePrice, e.target.value)
            }
            placeholder="Cost to Exercise Remaining"
            aria-label="Cost to Exercise Remaining ISOs"
          />
      </div>
    </div>
  );
};

export default ISOForm;
