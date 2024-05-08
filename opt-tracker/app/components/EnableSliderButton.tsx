import React, { FC } from "react";
import Checkbox from "@mui/material/Checkbox";

interface EnableSliderProps {
  handleEnableSlider: () => void;
}

const EnableSliderButton: FC<EnableSliderProps> = ({ handleEnableSlider }) => (
  <div className="flex space-between width-20 jc-flex-end ai-center">
    <Checkbox onChange={handleEnableSlider} color="warning" />
    <div className="font-white">Enable Price Slider</div>
  </div>
);

export default EnableSliderButton;
