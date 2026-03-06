import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

interface EnableSliderProps {
  handleEnableSlider: () => void;
}

const EnableSliderButton: FC<EnableSliderProps> = ({ handleEnableSlider }) => (
  <div className="slider-button flex justify-between width-20 justify-end items-center">
    <Checkbox onChange={handleEnableSlider} color="warning" />
    <div className="font-white">Enable Price Slider</div>
  </div>
);

export default EnableSliderButton;
