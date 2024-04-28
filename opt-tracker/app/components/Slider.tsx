import * as React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 50,
    label: "$50",
  },
  {
    value: 100,
    label: "$100",
  },
];

const PriceSlider = () => {
  return (
    <Box sx={{ width: 700, backgroundColor: "white" }} className="ml-10 mt-20">
      <Slider
        className="width-90 ml-30"
        aria-label="Price Slider"
        defaultValue={30}
        step={0.5}
        min={0}
        max={100}
        color="secondary"
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
};

export default PriceSlider;
