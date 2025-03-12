import { validateInput } from "app/utils";
import React, { FC, useState } from "react";

const RSUForm = ({rsusOwned, setRsusOwned}) => {
  return (
    <div className="font-mouldyCheese flex ai-center">
      <label>
        Enter RSUs Owned:
        <input
          type="text"
          value={rsusOwned}
          onChange={(e) => validateInput(setRsusOwned, e.target.value)}
        />
      </label>
    </div>
  );
};

export default RSUForm;
