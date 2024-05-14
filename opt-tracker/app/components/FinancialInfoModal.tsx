import React, { FC, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FinData } from "../page";

interface ModalProps {
  open: boolean;
  closeModal: (finData: FinData) => void;
}

const FinancialInfoModal: FC<ModalProps> = ({ open, closeModal }) => {
  const [rsusOwned, setRsusOwned] = useState<number>(0);
  const [nsosOwned, setNsosOwned] = useState<number>(0);
  const [isosOwned, setIsosOwned] = useState<number>(0);
  const [isoPurchasePrice, setIsoPurchasePrice] = useState<number>(0);
  const [nsoPurchasePrice, setNsoPurchasePrice] = useState<number>(0);
  const [isoSharesToBuy, setIsoSharesToBuy] = useState<number>(0);
  const [nsoSharesToBuy, setNsoSharesToBuy] = useState<number>(0);
  const [estimatedSalary, setEstimatedSalary] = useState<number>(0);

  const mapToFinData = () => {
    const finData = {} as FinData;
    finData.rsusOwned = rsusOwned;
    finData.nsosOwned = nsosOwned;
    finData.isosOwned = isosOwned;
    finData.isoPurchasePrice = isoPurchasePrice;
    finData.nsoPurchasePrice = nsoPurchasePrice;
    finData.isoSharesToBuy = isoSharesToBuy;
    finData.nsoSharesToBuy = nsoSharesToBuy;
    finData.estimatedSalary = estimatedSalary;
    return finData;
  };

  const handleSubmitInfo = () => {
    const finData = mapToFinData();
    closeModal(finData);
  };

  return (
    <Modal open={open}>
      <Box>
        <div className="flex jc-center font-kadoku font-60">
          <p>Welcome to Reddit Tracker!</p>
        </div>
        <div className="flex ai-center font-mouldyCheese flex-column mt-20">
          <p>Let's start by getting some of your stock information!</p>
          {/* <p>Once you submit this tool will help you understand how much money you have, how much your unexercised options are worth and how much tax you stand to pay in 2024 tax when you exercise</p> */}
        </div>
        <div className="flex space-around font-mouldyCheese mt-20">
          <div>
            <p>Enter ISOs Owned:</p>
            <input
              type="text"
              onChange={(e) => setIsosOwned(parseInt(e.target.value))}
            />
          </div>
          <div>
            <p>Enter NSOs Owned:</p>
            <input
              type="text"
              onChange={(e) => setNsosOwned(parseInt(e.target.value))}
            />
          </div>
          <div>
            <p>Enter RSUs Owned:</p>
            <input
              type="text"
              onChange={(e) => setRsusOwned(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex space-around font-mouldyCheese mt-60">
          <div>
            <p>How many ISOs do you have left?</p>
            <input
              type="text"
              onChange={(e) => setIsoSharesToBuy(parseInt(e.target.value))}
            />
            <p>What total do you need to pay to buy your ISOs?</p>
            <input
              type="text"
              onChange={(e) => setIsoPurchasePrice(parseInt(e.target.value))}
            />
          </div>
          <div>
            <p>How many NSOs do you have left?</p>
            <input
              type="text"
              onChange={(e) => setNsoSharesToBuy(parseInt(e.target.value))}
            />
            <p>What total do you need to pay to buy your NSOs?</p>
            <input
              type="text"
              onChange={(e) => setNsoPurchasePrice(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-40 flex flex-column ai-center font-mouldyCheese">
          <p>{`How much do you plan to make this year (income without stock options)?`}</p>
          <input
            type="text"
            onChange={(e) => setEstimatedSalary(parseInt(e.target.value))}
          />
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
