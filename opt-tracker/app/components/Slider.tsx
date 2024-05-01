import React, { useState, FC } from "react";
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
    <Box sx={{ width: 700, backgroundColor: "white" }} className="ml-10 mt-20">
      <Slider
        className="width-90 ml-30"
        aria-label="Price Slider"
        step={0.5}
        min={0}
        max={100}
        value={priceSliderValue}
        color="secondary"
        marks={marks}
        valueLabelDisplay="on"
        onChange={handleChange}
        disabled={!toggleSlider}
      />
    </Box>
  );
};

export default PriceSlider;
