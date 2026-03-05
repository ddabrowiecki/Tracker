import { validateInput } from "app/utils";
import React, { FC, useState } from "react";
import BoxWithLabelWrapper from "./BoxWithLabel";

const NSOForm = ({
  nsosOwned,
  setNsosOwned,
  nsoSharesToBuy,
  setNsoSharesToBuy,
  nsoSharesToBuyPurchasePrice,
  setNsoSharesToBuyPurchasePrice,
}) => {
  return (
    <BoxWithLabelWrapper title="Nonqualified Stock Options (NSOs)">
      <div className="flex flex-col">
        <input
          type="text"
          value={nsosOwned}
          onChange={(e) => validateInput(setNsosOwned, e.target.value)}
          placeholder="Owned"
          aria-label="Amount of NSOs Owned"
        />
        <input
          type="text"
          value={nsoSharesToBuy}
          onChange={(e) => validateInput(setNsoSharesToBuy, e.target.value)}
          placeholder="Unexercised Amount"
          aria-label="Amount of Unexercised NSOs"
        />
        <input
          type="text"
          value={nsoSharesToBuyPurchasePrice}
          onChange={(e) =>
            validateInput(setNsoSharesToBuyPurchasePrice, e.target.value)
          }
          placeholder="Cost to Exercise Remaining"
          aria-label="Cost to Exercise Remaining NSOs"
        />
      </div>
    </BoxWithLabelWrapper>
  );
};

export default NSOForm;
