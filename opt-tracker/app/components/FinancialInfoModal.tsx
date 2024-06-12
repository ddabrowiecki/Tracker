import React, { FC, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { FinData } from "../page";

interface ModalProps {
  open: boolean;
  closeModal: (finData: FinData) => void;
}

const FinancialInfoModal: FC<ModalProps> = ({ open, closeModal }) => {
  const [rsusOwned, setRsusOwned] = useState<string>("");
  const [nsosOwned, setNsosOwned] = useState<string>("");
  const [isosOwned, setIsosOwned] = useState<string>("");
  const [isoPurchasePrice, setIsoPurchasePrice] = useState<string>("");
  const [isoSharesToBuy, setIsoSharesToBuy] = useState<string>("");
  const [nsoSharesToBuy, setNsoSharesToBuy] = useState<string>("");
  const [isoSharesToBuyPurchasePrice, setIsoSharesToBuyPurchasePrice] =
    useState<string>("");
  const [nsoSharesToBuyPurchasePrice, setNsoSharesToBuyPurchasePrice] =
    useState<string>("");
  const [estimatedSalary, setEstimatedSalary] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<string>("single");

  const mapToFinData = () => {
    const finData = {} as FinData;
    finData.rsusOwned = cleanInput(rsusOwned) || 0;
    finData.nsosOwned = cleanInput(nsosOwned) || 0;
    finData.isosOwned = cleanInput(isosOwned) || 0;
    finData.isoPurchasePrice = cleanInput(isoPurchasePrice) || 0;
    finData.isoSharesToBuy = cleanInput(isoSharesToBuy) || 0;
    finData.nsoSharesToBuy = cleanInput(nsoSharesToBuy) || 0;
    finData.isoSharesToBuyPurchasePrice = cleanInput(
      isoSharesToBuyPurchasePrice
    ) || 0;
    finData.nsoSharesToBuyPurchasePrice = cleanInput(
      nsoSharesToBuyPurchasePrice
    ) || 0;
    finData.estimatedSalary = cleanInput(estimatedSalary) || 0;
    finData.filingStatus = filingStatus;
    return finData;
  };

  const handleSubmitInfo = () => {
    const finData = mapToFinData();
    closeModal(finData);
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFilingStatus(event.target.value as string);
  };

  const validateInput = (setter, amount: string) => {
    if (/\D+/.test(amount)) {
      alert("Please enter only numerical amounts");
      setter("");
      return false;
    } else {
      setter(amount);
    }
  };

  const cleanInput = (amount: string) => {
    return parseFloat(amount.replace(/[$,]/g, ""));
  };

  return (
    <Modal open={open} className="modal">
      <Box className="modal-contents">
        <div className="welcome-title flex jc-center font-kadoku font-60">
          <p>Welcome to Reddit Tracker!</p>
        </div>
        <div className="flex ai-center font-mouldyCheese flex-column mt-20">
          <p>Let's start by getting some of your stock information!</p>
        </div>
        <div className="modal-box flex space-around font-mouldyCheese mt-20">
          <div>
            <label>
              Enter ISOs Owned:
              <input
                type="text"
                value={isosOwned}
                onChange={(e) => validateInput(setIsosOwned, e.target.value)}
              />
            </label>
            <label className="mt-5">
              How much did you pay for these ISOs?
              <input
                type="text"
                value={isoPurchasePrice}
                onChange={(e) =>
                  validateInput(setIsoPurchasePrice, e.target.value)
                }
              />
            </label>
          </div>
          <div>
            <label>
              Enter NSOs Owned:
              <input
                type="text"
                value={nsosOwned}
                onChange={(e) => validateInput(setNsosOwned, e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Enter RSUs Owned:
              <input
                type="text"
                value={rsusOwned}
                onChange={(e) => validateInput(setRsusOwned, e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="modal-box flex space-around font-mouldyCheese mt-40 ml-30">
          <div>
            <label>
              How many ISOs do you have left?
              <input
                type="text"
                value={isoSharesToBuy}
                onChange={(e) =>
                  validateInput(setIsoSharesToBuy, e.target.value)
                }
              />
            </label>
            <label className="mt-5">
              What total do you need to pay to buy your ISOs?
              <input
                type="text"
                value={isoSharesToBuyPurchasePrice}
                onChange={(e) =>
                  validateInput(setIsoSharesToBuyPurchasePrice, e.target.value)
                }
              />
            </label>
            <div className="mt-40">
              <label>
                How much do you plan to make this year (income without stock
                options)?
                <input
                  type="text"
                  value={estimatedSalary}
                  onChange={(e) =>
                    validateInput(setEstimatedSalary, e.target.value)
                  }
                />
              </label>
            </div>
          </div>
          <div>
            <label>
              How many NSOs do you have left?
              <input
                type="text"
                value={nsoSharesToBuy}
                onChange={(e) =>
                  validateInput(setNsoSharesToBuy, e.target.value)
                }
              />
            </label>
            <label className="mt-5">
              What total do you need to pay to buy your NSOs?
              <input
                type="text"
                value={nsoSharesToBuyPurchasePrice}
                onChange={(e) =>
                  validateInput(setNsoSharesToBuyPurchasePrice, e.target.value)
                }
              />
            </label>
            <div className="mt-40">
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
                      <MenuItem value="headOfHousehold">
                        Head of Household
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-20 flex jc-flex-end width-95">
          <Button
            onClick={handleSubmitInfo}
            color="warning"
            variant="contained"
            size="small"
          >
            Submit Information
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default FinancialInfoModal;
