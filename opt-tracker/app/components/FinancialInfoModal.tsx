import React, { FC, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NSOForm from "./NSOForm";
import ISOForm from "./ISOForm";
import { mapToFinData } from "app/utils";
import PersonalInfoForm from "./PersonalInfoForm";
import RSUForm from "./RSUForm";
import { FinData } from "app/types";

interface ModalProps {
  open: boolean;
  closeModal: (finData: FinData) => void;
}

const FinancialInfoModal: FC<ModalProps> = ({ open, closeModal }) => {
  const [estimatedSalary, setEstimatedSalary] = useState<string>("");
  const [filingStatus, setFilingStatus] = useState<string>("single");
  const [nsosOwned, setNsosOwned] = useState<string>("");
  const [nsoSharesToBuy, setNsoSharesToBuy] = useState<string>("");
  const [nsoSharesToBuyPurchasePrice, setNsoSharesToBuyPurchasePrice] =
    useState<string>("");
  const [isosOwned, setIsosOwned] = useState<string>("");
  const [isoPurchasePrice, setIsoPurchasePrice] = useState<string>("");
  const [isoSharesToBuy, setIsoSharesToBuy] = useState<string>("");
  const [isoSharesToBuyPurchasePrice, setIsoSharesToBuyPurchasePrice] =
    useState<string>("");
  const [rsusOwned, setRsusOwned] = useState<string>("");

  const handleSubmitInfo = () => {
    const finData = mapToFinData({
      rsusOwned,
      nsosOwned,
      isosOwned,
      isoPurchasePrice,
      isoSharesToBuy,
      nsoSharesToBuy,
      isoSharesToBuyPurchasePrice,
      estimatedSalary,
      filingStatus,
      nsoSharesToBuyPurchasePrice,
    });
    closeModal(finData);
  };

  return (
    <Modal open={open} className="modal">
      <Box className="p-10">
        <div className="welcome-title flex jc-center font-kadoku font-60">
          <p>Welcome to Reddit Tracker!</p>
        </div>
        <div className="flex ai-center font-mouldyCheese flex-column mt-20">
          <p>Let's start by getting some of your stock information!</p>
        </div>
        <PersonalInfoForm
          filingStatus={filingStatus}
          setFilingStatus={setFilingStatus}
          estimatedSalary={estimatedSalary}
          setEstimatedSalary={setEstimatedSalary}
        />
        <ISOForm
          isosOwned={isosOwned}
          setIsosOwned={setIsosOwned}
          isoPurchasePrice={isoPurchasePrice}
          setIsoPurchasePrice={setIsoPurchasePrice}
          isoSharesToBuy={isoSharesToBuy}
          setIsoSharesToBuy={setIsoSharesToBuy}
          isoSharesToBuyPurchasePrice={isoSharesToBuyPurchasePrice}
          setIsoSharesToBuyPurchasePrice={setIsoSharesToBuyPurchasePrice}
        />
        <RSUForm rsusOwned={rsusOwned} setRsusOwned={setRsusOwned} />
        <NSOForm
          nsosOwned={nsosOwned}
          setNsosOwned={setNsosOwned}
          nsoSharesToBuy={nsoSharesToBuy}
          setNsoSharesToBuy={setNsoSharesToBuy}
          nsoSharesToBuyPurchasePrice={nsoSharesToBuyPurchasePrice}
          setNsoSharesToBuyPurchasePrice={setNsoSharesToBuyPurchasePrice}
        />

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
