import React, { FC, useState } from "react";
import { validateInput } from "app/utils";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";

const PersonalInfoForm = ({
  estimatedSalary,
  setEstimatedSalary,
  filingStatus,
  setFilingStatus,
}) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilingStatus(event.target.value as string);
  };
  return (
    <div className="font-mouldyCheese font-white flex mt-20">
      <div>
        <label>
          What is your tax filing status?
          <Box className="mt-5">
            <FormControl fullWidth>
              <Select
                color="warning"
                style={{
                  backgroundColor: "white",
                  maxHeight: "30px",
                  maxWidth: "200px",
                }}
                value={filingStatus}
                onChange={handleSelectChange}
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="marriedFilingJointly">
                  Married Filing Jointly
                </MenuItem>
                <MenuItem value="marriedFilingSeparately">
                  Married Filing Separately
                </MenuItem>
                <MenuItem value="headOfHousehold">Head of Household</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </label>
      </div>
      <div className="income">
        <label>
          <span>How much do you plan to make this year </span>
          <span>(income without stock options)?</span>
          <input
            type="text"
            value={estimatedSalary}
            onChange={(e) => validateInput(setEstimatedSalary, e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
