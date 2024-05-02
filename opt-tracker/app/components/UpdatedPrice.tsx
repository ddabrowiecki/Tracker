import React, { FC } from "react";
import Button from "@mui/material/Button";

interface UpdatedPriceProps {
  updatedPrice: number;
  recalculate: () => void;
  reset: () => void;
}

const UpdatedPrice: FC<UpdatedPriceProps> = ({ recalculate, reset }) => {
  return (
    <div className="flex space-between width-20 jc-flex-start ai-center">
      <Button onClick={recalculate} color="secondary">Update Table</Button>
      <Button onClick={reset} color="secondary">Reset Price</Button>
    </div>
  );
};

export default UpdatedPrice;
