import { validateInput } from "app/utils";
import React, { FC, useState } from "react";
import BoxWithLabelWrapper from "./BoxWithLabel";

const RSUForm = ({ rsusOwned, setRsusOwned }) => {
  return (
    <BoxWithLabelWrapper title="Reserved Stock Units (RSUs)">
      <input
        type="text"
        value={rsusOwned}
        onChange={(e) => validateInput(setRsusOwned, e.target.value)}
        placeholder="Amount Owned"
        aria-label="Amount of RSUs Owned"
      />
    </BoxWithLabelWrapper>
  );
};

export default RSUForm;
