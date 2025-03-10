import { validateInput } from "app/utils";
import React, { FC, useState } from "react";

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
    <div className="modal-box flex space-around font-mouldyCheese mt-20">
      <div>
        <label>
          Enter ISOs Owned:
          <input
            type="text"
            value={isosOwned}
            onChange={(e) => validateInput(setIsosOwned, e.target.value)}
          />
        </label>
        <label className="mt-5">
          How much did you pay for these ISOs?
          <input
            type="text"
            value={isoPurchasePrice}
            onChange={(e) => validateInput(setIsoPurchasePrice, e.target.value)}
          />
        </label>
        <label>
          How many ISOs do you have left?
          <input
            type="text"
            value={isoSharesToBuy}
            onChange={(e) => validateInput(setIsoSharesToBuy, e.target.value)}
          />
        </label>
        <label className="mt-5">
          What total do you need to pay to buy your ISOs?
          <input
            type="text"
            value={isoSharesToBuyPurchasePrice}
            onChange={(e) =>
              validateInput(setIsoSharesToBuyPurchasePrice, e.target.value)
            }
          />
        </label>
      </div>
    </div>
  );
};

export default ISOForm;
