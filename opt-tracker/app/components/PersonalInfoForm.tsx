import React, { FC, useState } from "react";
import { validateInput } from "app/utils";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import BoxWithLabelWrapper from "./BoxWithLabel";

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
    <>
      <BoxWithLabelWrapper title="Tax Filing Status">
        <Box className="mt-5">
          <FormControl fullWidth>
            <Select
              className="background-white"
              color="warning"
              style={{
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
      </BoxWithLabelWrapper>
      <BoxWithLabelWrapper title="Estimated Income">
        <input
          type="text"
          value={estimatedSalary}
          onChange={(e) => validateInput(setEstimatedSalary, e.target.value)}
          placeholder="Without Stock Options"
          aria-label="Estimated Income Without Stock Options"
        />
      </BoxWithLabelWrapper>
    </>
  );
};

export default PersonalInfoForm;
