import { TaxBracketMaster, TaxInfo, FinData } from "./types";

export const mapToNameString = (key: string) => {
  switch (key) {
    case "single":
      return "Single";
    case "marriedFilingJointly":
      return "Married Filing Jointly";
    case "marriedFilingSeparately":
      return "Married Filing Separately";
    case "headOfHousehold":
      return "Head of Household";
  }
};

// Tax brackets for 2024
const taxBrackets2024: TaxBracketMaster = {
  capitalGains: {
    single: {
      zero: [0, 47025, 0, "0%", "$0 - $47,025"],
      fifteen: [47026, 518900, 0.15, "15%", "$47,026 - $518,900"],
      twenty: [518901, 1000000000, 0.2, "20%", "$518,901 +"],
    },
    marriedFilingJointly: {
      zero: [0, 94050, 0, "0%", "$0 - $94,050"],
      fifteen: [94051, 583750, 0.15, "15%", "$94,051 - $583,750"],
      twenty: [583751, 1000000000, 0.2, "20%", "$583,751 +"],
    },
    marriedFilingSeparately: {
      zero: [0, 47025, 0, "0%", "$0 - $47,025"],
      fifteen: [47026, 291850, 0.15, "15%", "$47,026 - $291,850"],
      twenty: [291851, 1000000000, 0.2, "20%", "$291,851 +"],
    },
    headOfHousehold: {
      zero: [0, 63000, 0, "0%", "$0 - $63,000"],
      fifteen: [63001, 551350, 0.15, "15%", "$63,001 - $551,350"],
      twenty: [551351, 1000000000, 0.2, "20%", "$551,351 +"],
    },
  },
  regularIncome: {
    single: {
      ten: [0, 11600, 0.1, "10%", "$0 - $11,600"],
      twelve: [11601, 47150, 0.12, "12%", "$11,601 - $47,150"],
      twentytwo: [47151, 100525, 0.22, "22%", "$47,151 - $100,525"],
      twentyfour: [100526, 191950, 0.24, "24%", "$100,526 - $191,950"],
      thirtytwo: [191951, 243725, 0.32, "32%", "$191,951 - $243,725"],
      thirtyfive: [243726, 609350, 0.35, "35%", "$243,726 - $609,350"],
      thirtyseven: [609351, 1000000000, 0.37, "37%", "$609,351 +"],
    },
    marriedFilingJointly: {
      ten: [0, 23200, 0.1, "10%", "$0 - $23,200"],
      twelve: [23201, 94300, 0.12, "12%", "$23,201 - $94,300"],
      twentytwo: [94301, 201050, 0.22, "22%", "$94,301 - $201,050"],
      twentyfour: [201051, 383900, 0.24, "24%", "$201,051 - $383,900"],
      thirtytwo: [383901, 487450, 0.32, "32%", "$383,901 - $487,450"],
      thirtyfive: [487451, 731200, 0.35, "35%", "$487,451 - $731,200"],
      thirtyseven: [731201, 1000000000, 0.37, "37%", "$731,201 +"],
    },
    marriedFilingSeparately: {
      ten: [0, 11600, 0.1, "10%", "$0 - $11,600"],
      twelve: [11601, 47150, 0.12, "12%", "$11,601 - $47,150"],
      twentytwo: [47151, 100525, 0.22, "22%", "$47,151 - $100,525"],
      twentyfour: [100526, 191950, 0.24, "24%", "$100,526 - $191,950"],
      thirtytwo: [191951, 243725, 0.32, "32%", "$191,951 - $243,725"],
      thirtyfive: [243726, 365600, 0.35, "35%", "$243,726 - $365,600"],
      thirtyseven: [365601, 1000000000, 0.37, "37%", "$365,601 +"],
    },
    headOfHousehold: {
      ten: [0, 16550, 0.1, "10%", "$0 - $16550"],
      twelve: [16551, 63100, 0.12, "12%", "$16,551 - $63,100"],
      twentytwo: [63101, 100500, 0.22, "22%", "$63,101 - $100,500"],
      twentyfour: [100501, 191950, 0.24, "24%", "$100,501 - $191,950"],
      thirtytwo: [191951, 243700, 0.32, "32%", "$191,951 - $243,700"],
      thirtyfive: [243701, 609350, 0.35, "35%", "$243,701 - $609,350"],
      thirtyseven: [609351, 1000000000, 0.37, "37%", "$609,351 +"],
    },
  },
};

const taxBrackets2025: TaxBracketMaster = {
  capitalGains: {
    single: {
      zero: [0, 48350, 0, "0%", "$0 - $48,350"],
      fifteen: [48351, 533400, 0.15, "15%", "$48,351 - $533,400"],
      twenty: [533401, 1000000000, 0.2, "20%", "$533,401 +"],
    },
    marriedFilingJointly: {
      zero: [0, 96700, 0, "0%", "$0 - $96,700"],
      fifteen: [96701, 600050, 0.15, "15%", "$96,701 - $600,050"],
      twenty: [600051, 1000000000, 0.2, "20%", "$600,051 +"],
    },
    marriedFilingSeparately: {
      zero: [0, 48350, 0, "0%", "$0 - $48,350"],
      fifteen: [48351, 300000, 0.15, "15%", "$48,351 - $300,000"],
      twenty: [300001, 1000000000, 0.2, "20%", "$300,001 +"],
    },
    headOfHousehold: {
      zero: [0, 64750, 0, "0%", "$0 - $64,750"],
      fifteen: [64751, 566700, 0.15, "15%", "$64,751 - $566,700"],
      twenty: [566701, 1000000000, 0.2, "20%", "$566,701 +"],
    },
  },
  regularIncome: {
    single: {
      ten: [0, 11925, 0.1, "10%", "$0 - $11,925"],
      twelve: [11926, 48475, 0.12, "12%", "$11,926 - $48,475"],
      twentytwo: [48476, 103350, 0.22, "22%", "$48,476 - $103,350"],
      twentyfour: [103351, 197300, 0.24, "24%", "$103,351 - $197,300"],
      thirtytwo: [197301, 250525, 0.32, "32%", "$197,301 - $250,525"],
      thirtyfive: [250526, 626350, 0.35, "35%", "$250,526 - $626,350"],
      thirtyseven: [626351, 1000000000, 0.37, "37%", "$626,351 +"],
    },
    marriedFilingJointly: {
      ten: [0, 23850, 0.1, "10%", "$0 - $23,850"],
      twelve: [23851, 96950, 0.12, "12%", "$23,851 - $96,950"],
      twentytwo: [96951, 206700, 0.22, "22%", "$96,951 - $206,700"],
      twentyfour: [206701, 394600, 0.24, "24%", "$206,701 - $394,600"],
      thirtytwo: [394601, 501050, 0.32, "32%", "$394,601 - $501,050"],
      thirtyfive: [501051, 751600, 0.35, "35%", "$501,051 - $751,600"],
      thirtyseven: [751601, 1000000000, 0.37, "37%", "$751,601 +"],
    },
    marriedFilingSeparately: {
      ten: [0, 11925, 0.1, "10%", "$0 - $11,925"],
      twelve: [11926, 48475, 0.12, "12%", "$11,926 - $48,475"],
      twentytwo: [48476, 103350, 0.22, "22%", "$48,476 - $103,350"],
      twentyfour: [103351, 197300, 0.24, "24%", "$103,351 - $197,300"],
      thirtytwo: [197301, 250525, 0.32, "32%", "$197,301 - $250,525"],
      thirtyfive: [250526, 375800, 0.35, "35%", "$250,526 - $375,800"],
      thirtyseven: [375801, 1000000000, 0.37, "37%", "$375,801 +"],
    },
    headOfHousehold: {
      ten: [0, 17000, 0.1, "10%", "$0 - $17,000"],
      twelve: [17001, 64850, 0.12, "12%", "$17,001 - $64,850"],
      twentytwo: [64851, 103350, 0.22, "22%", "$64,851 - $103,350"],
      twentyfour: [103351, 197300, 0.24, "24%", "$103,351 - $197,300"],
      thirtytwo: [197301, 250500, 0.32, "32%", "$197,301 - $250,500"],
      thirtyfive: [250501, 626350, 0.35, "35%", "$250,501 - $626,350"],
      thirtyseven: [626351, 1000000000, 0.37, "37%", "$626,351 +"],
    },
  },
};

export const determineTaxBrackets = (
  totalOwnedValue: number,
  totalIncome: number,
  filingStatus: string
) => {
  const capGains: TaxInfo = {} as TaxInfo;
  const regIncome: TaxInfo = {} as TaxInfo;
  Object.values(taxBrackets2025.capitalGains[filingStatus]).forEach((bracket) => {
    if (totalOwnedValue >= bracket[0] && totalOwnedValue <= bracket[1]) {
      capGains.tax = totalOwnedValue * bracket[2];
      capGains.rate = bracket[3];
      capGains.range = bracket[4];
      capGains.totalAfterTax = totalOwnedValue - totalOwnedValue * bracket[2];
    }
  });
  Object.values(taxBrackets2025.regularIncome[filingStatus]).forEach((bracket) => {
    if (totalIncome >= bracket[0] && totalIncome <= bracket[1]) {
      regIncome.tax = totalIncome * bracket[2];
      regIncome.rate = bracket[3];
      regIncome.range = bracket[4];
    }
  });

  return [capGains, regIncome];
};

export const validateInput = (setter, amount: string) => {
  if (/\D+/.test(amount)) {
    alert("Please enter only numerical amounts");
    setter("");
    return false;
  } else {
    setter(amount);
  }
};

export const cleanInput = (amount: string) => {
  return parseFloat(amount.replace(/[$,]/g, ""));
};

export const mapToFinData = ({
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
}) => {
  const finData = {} as FinData;
  finData.rsusOwned = cleanInput(rsusOwned) || 0;
  finData.nsosOwned = cleanInput(nsosOwned) || 0;
  finData.isosOwned = cleanInput(isosOwned) || 0;
  finData.isoPurchasePrice = cleanInput(isoPurchasePrice) || 0;
  finData.isoSharesToBuy = cleanInput(isoSharesToBuy) || 0;
  finData.nsoSharesToBuy = cleanInput(nsoSharesToBuy) || 0;
  finData.isoSharesToBuyPurchasePrice =
    cleanInput(isoSharesToBuyPurchasePrice) || 0;
  finData.nsoSharesToBuyPurchasePrice =
    cleanInput(nsoSharesToBuyPurchasePrice) || 0;
  finData.estimatedSalary = cleanInput(estimatedSalary) || 0;
  finData.filingStatus = filingStatus;
  return finData;
};
