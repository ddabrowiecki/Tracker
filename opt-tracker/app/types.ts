export type TaxBracketInfo = [number, number, number, string, string];

export interface TaxBracketObject {
  [bracketString: string]: TaxBracketInfo;
}

export interface TaxTypeBrackets {
  [filingStatus: string]: TaxBracketObject;
}

export interface TaxBracketMaster {
  capitalGains: TaxTypeBrackets;
  regularIncome: TaxTypeBrackets;
}

export interface TaxInfo {
  rate: string;
  range: string;
  tax: number;
  totalAfterTax: number;
}

export type StockData = string[];

export interface DataFromApi {
  stockData: StockData[];
}

export interface FinData {
  rsusOwned: number;
  nsosOwned: number;
  isosOwned: number;
  isoPurchasePrice: number;
  estimatedSalary: number;
  isoSharesToBuy: number;
  nsoSharesToBuy: number;
  isoSharesToBuyPurchasePrice: number;
  nsoSharesToBuyPurchasePrice: number;
  filingStatus: string;
}

export interface GraphData {
  date: string;
  price: number;
}