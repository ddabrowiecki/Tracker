import React, { FC, useState } from "react";
import Button from "@mui/material/Button";
import NSOForm from "./NSOForm";
import ISOForm from "./ISOForm";
import { mapToFinData } from "app/utils";
import PersonalInfoForm from "./PersonalInfoForm";
import RSUForm from "./RSUForm";
import { FinData } from "app/types";
import Link from "next/link";

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
    <div className="background-form">
      <div className="font-orange-red">
        <div className="welcome-title flex jc-center font-kadoku font-60 mobile-text-center">
          <p>Welcome to Reddit Tracker!</p>
        </div>
        <div className="flex jc-center ai-center font-mouldyCheese flex-row info-request mobile-text-center">
          <p>Let's start by getting some of your stock information!</p>
          <Button
            className="ml-10"
            color="warning"
            size="small"
            variant="outlined"
          ><Link href="/more-info">{`Learn More >`}</Link></Button>
        </div>
      </div>
      <div className="flex font-white flex-column ai-center form-input-container">
        <div className="flex jc-flex-start form-category-box ">
          <PersonalInfoForm
            filingStatus={filingStatus}
            setFilingStatus={setFilingStatus}
            estimatedSalary={estimatedSalary}
            setEstimatedSalary={setEstimatedSalary}
          />
        </div>
        <div className="flex mt-20 form-category-box form-box mobile-margin-top-spacing">
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

      <div className="flex jc-flex-end width-85 mobile-margin-top-spacing mb-40">
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
