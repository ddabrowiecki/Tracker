import { validateInput } from "app/utils";
import React, { FC, useState } from "react";

const NSOForm = ({
  nsosOwned,
  setNsosOwned,
  nsoSharesToBuy,
  setNsoSharesToBuy,
  nsoSharesToBuyPurchasePrice,
  setNsoSharesToBuyPurchasePrice,
}) => {
  return (
    <div className="modal-box flex space-around font-mouldyCheese mt-40 ml-30">
      <div>
        <label>
          Enter NSOs Owned:
          <input
            type="text"
            value={nsosOwned}
            onChange={(e) => validateInput(setNsosOwned, e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          How many NSOs do you have left?
          <input
            type="text"
            value={nsoSharesToBuy}
            onChange={(e) => validateInput(setNsoSharesToBuy, e.target.value)}
          />
        </label>
        <label className="mt-5">
          What total do you need to pay to buy your NSOs?
          <input
            type="text"
            value={nsoSharesToBuyPurchasePrice}
            onChange={(e) =>
              validateInput(setNsoSharesToBuyPurchasePrice, e.target.value)
            }
          />
        </label>
      </div>
    </div>
  );
};

export default NSOForm;
