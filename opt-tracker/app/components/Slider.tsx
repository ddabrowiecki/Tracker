import React, { useState, FC } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 200,
    label: "$200",
  },
  {
    value: 400,
    label: "$400",
  },
];

interface PriceSliderProps {
  handlePriceSlider: (price: number) => void;
  toggleSlider: boolean;
  priceSliderValue: number;
}

const PriceSlider: FC<PriceSliderProps> = ({ toggleSlider, priceSliderValue, handlePriceSlider }) => {
  const handleChange = (event: Event, newValue: number  | number[]) => {
    handlePriceSlider(newValue as number);
  };

  return (
    <Box sx={{ backgroundColor: "white", paddingLeft: "25px", paddingRight: "25px" }} className="slider mt-20 border-radius-5">
      <Slider
        aria-label="Price Slider"
        step={0.5}
        min={0}
        max={400}
        value={priceSliderValue}
        color="warning"
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleChange}
        disabled={!toggleSlider}
        size="small"
      />
    </Box>
  );
};

export default PriceSlider;
