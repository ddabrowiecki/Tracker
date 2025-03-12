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
  closeModal: (finData: FinData) => void;
}

const FinancialInfoModal: FC<ModalProps> = ({ closeModal }) => {
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
    <div className="gradient-background">
      <div className="font-orange-red">
        <div className="welcome-title flex jc-center font-kadoku font-60">
          <p>Welcome to Reddit Tracker!</p>
        </div>
        <div className="flex jc-center ai-center font-mouldyCheese flex-row">
          <p>Let's start by getting some of your stock information!</p>
          <Button
            className="ml-10"
            color="warning"
            size="small"
            variant="outlined"
          >{`Learn More >`}</Button>
        </div>
      </div>
      <div className="flex font-white flex-column ai-center ml-100">
        <div className="width-1000 flex jc-flex-start">
          <PersonalInfoForm
            filingStatus={filingStatus}
            setFilingStatus={setFilingStatus}
            estimatedSalary={estimatedSalary}
            setEstimatedSalary={setEstimatedSalary}
          />
        </div>
        <div className="flex width-1000 mt-20">
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
        </div>
      </div>

      <div className="flex jc-flex-end width-85">
        <Button
          onClick={handleSubmitInfo}
          color="warning"
          variant="contained"
          size="small"
        >
          Submit Information
        </Button>
      </div>
    </div>
  );
};

export default FinancialInfoModal;
