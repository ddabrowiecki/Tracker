import React, { FC } from "react";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles"

interface UpdatedPriceProps {
  updatedPrice: number;
  recalculate: () => void;
  reset: () => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(255, 86, 0)',
    },
    secondary: {
      main: '#E0C2FF',
    },
  },
});

const UpdatedPrice: FC<UpdatedPriceProps> = ({ recalculate, reset }) => {
  return (
    <div className="updated-price flex space-between width-20 ai-center mt-5">
      <Button onClick={recalculate} color="warning" variant="contained" size="small">Update Table</Button>
      <Button className="ml-5" onClick={reset} color="warning" variant="contained" size="small" >Reset Price</Button>
    </div>
  );
};

export default UpdatedPrice;
